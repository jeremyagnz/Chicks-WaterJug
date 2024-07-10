import { Injectable } from '@angular/core';

type State = [number, number];
type LogEntry = { state: State, action: string };

@Injectable({
  providedIn: 'root'
})
export class WaterJugLogicService {

  log: LogEntry[] = [];
  shortestLog: LogEntry[] | null = null;
  private maxDepth = 1000;

  constructor() { }

  isSolvable(capacityX: number, capacityY: number, target: number): boolean {
    this.log = [];
    this.shortestLog = null;

    if (!this.isValidInput(capacityX, capacityY, target)) {
      throw new Error('Invalid input: X, Y, and Z must be integers greater than 0.');
    }

    if (target > capacityX && target > capacityY) {
      this.log.push({ state: [0, 0], action: `Target ${target} is larger than both capacities ${capacityX} and ${capacityY}.` });
      return false;
    }

    const queue: { state: State, log: LogEntry[], depth: number }[] = [];
    const visited: Set<string> = new Set();

    queue.push({ state: [0, 0], log: [], depth: 0 });
    visited.add(this.serialize([0, 0]));

    while (queue.length > 0) {
      const { state, log, depth } = queue.shift()!;
      this.log = log.slice();

      if (state[0] === target || state[1] === target || state[0] + state[1] === target) {
        if (!this.shortestLog || log.length < this.shortestLog.length) {
          this.shortestLog = log.slice();
        }
        continue;
      }

      if (depth >= this.maxDepth) {
        continue;
      }

      const nextStates: { state: State, action: string }[] = this.getNextStatesWithActions(state, capacityX, capacityY);

      for (const { state: nextState, action } of nextStates) {
        const serializedState = this.serialize(nextState);
        if (!visited.has(serializedState)) {
          queue.push({ state: nextState, log: [...log, { state: nextState, action }], depth: depth + 1 });
          visited.add(serializedState);


          if (queue.length > 1000000) {
            throw new Error('Exceeded maximum queue size. Unable to find solution.');
          }
        }
      }
    }

    if (this.shortestLog) {
      this.log = this.shortestLog;
      return true;
    } else {
      this.log.push({ state: [0, 0], action: 'No solution found' });
      return false;
    }
  }

  private isValidInput(capacityX: number, capacityY: number, target: number): boolean {
    return Number.isInteger(capacityX) && Number.isInteger(capacityY) && Number.isInteger(target) &&
           capacityX > 0 && capacityY > 0 && target >= 0;
  }

  private serialize(state: State): string {
    return `${state[0]},${state[1]}`;
  }

  private getNextStatesWithActions([x, y]: State, capacityX: number, capacityY: number): { state: State, action: string }[] {
    const states: { state: State, action: string }[] = [];

    // Load Jug X
    if (x < capacityX) {
      states.push({ state: [capacityX, y], action: 'Load Jug X' });
    }

    // Load Jug Y
    if (y < capacityY) {
      states.push({ state: [x, capacityY], action: 'Load Jug Y' });
    }

    // Empty Jug X
    if (x > 0) {
      states.push({ state: [0, y], action: 'Empty Jug X' });
    }

    // Empty Jug Y
    if (y > 0) {
      states.push({ state: [x, 0], action: 'Empty Jug Y' });
    }

    // Transfer from Jug X to Jug Y
    if (x > 0 && y < capacityY) {
      const transferXtoY = Math.min(x, capacityY - y);
      states.push({ state: [x - transferXtoY, y + transferXtoY], action: 'Transfer from Jug X to Jug Y' });
    }

    // Transfer from Jug Y to Jug X
    if (y > 0 && x < capacityX) {
      const transferYtoX = Math.min(y, capacityX - x);
      states.push({ state: [x + transferYtoX, y - transferYtoX], action: 'Transfer from Jug Y to Jug X' });
    }

    return states;
  }
}

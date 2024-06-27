import { Injectable } from '@angular/core';

type State = [number, number];

@Injectable({
  providedIn: 'root'
})
export class WaterJugLogicService {

  constructor() { }

  isSolvable(capacityX: number, capacityY: number, target: number): boolean {

    if (!this.isValidInput(capacityX, capacityY, target)) {
      throw new Error('Invalid input: X, Y, and Z must be integers greater than 0.');
    }

    if (target > capacityX && target > capacityY) {
      return false;
    }

    const queue: State[] = [];
    const visited: Set<string> = new Set();

    queue.push([0, 0]);
    visited.add(this.serialize([0, 0]));

    while (queue.length > 0) {
      const [currentX, currentY] = queue.shift()!;

      if (currentX === target || currentY === target || currentX + currentY === target) {
        return true;
      }

      const nextStates: State[] = this.getNextStates([currentX, currentY], capacityX, capacityY);

      for (const state of nextStates) {
        const serializedState = this.serialize(state);
        if (!visited.has(serializedState)) {
          queue.push(state);
          visited.add(serializedState);
        }
      }
    }

    return false;
  }

  private isValidInput(capacityX: number, capacityY: number, target: number): boolean {
    return Number.isInteger(capacityX) && Number.isInteger(capacityY) && Number.isInteger(target) &&
           capacityX > 0 && capacityY > 0 && target >= 0;
  }

  private serialize(state: State): string {
    return `${state[0]},${state[1]}`;
  }

  private getNextStates([x, y]: State, capacityX: number, capacityY: number): State[] {
    const states: State[] = [];

    // Load Jug X
    if (x < capacityX) {
      states.push([capacityX, y]);
    }

    // Load Jug Y
    if (y < capacityY) {
      states.push([x, capacityY]);
    }

    // Empty Jug X
    if (x > 0) {
      states.push([0, y]);
    }

    // Empty Jug Y
    if (y > 0) {
      states.push([x, 0]);
    }

    // Transfer from Jug X to Jug Y
    if (x > 0 && y < capacityY) {
      const transferXtoY = Math.min(x, capacityY - y);
      states.push([x - transferXtoY, y + transferXtoY]);
    }

    // Transfer from Jug Y to Jug X
    if (y > 0 && x < capacityX) {
      const transferYtoX = Math.min(y, capacityX - x);
      states.push([x + transferYtoX, y - transferYtoX]);
    }

    return states;
  }
}

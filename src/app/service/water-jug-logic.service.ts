import { Injectable } from '@angular/core';

/* Añadir Enum */
type State = [number, number];
@Injectable({
  providedIn: 'root'
})
export class WaterJugLogicService {

  constructor() { }

  isSolvable(capacityX: number, capacityY: number, target: number): boolean {
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

  private serialize(state: State): string {
    return `${state[0]},${state[1]}`;
  }

  private getNextStates([x, y]: State, capacityX: number, capacityY: number): State[] {
    const states: State[] = [];

    // Fill Jug X
    states.push([capacityX, y]);

    // Fill Jug Y
    states.push([x, capacityY]);

    // Empty Jug X
    states.push([0, y]);

    // Empty Jug Y
    states.push([x, 0]);

    // Pour Jug X into Jug Y
    const pourXtoY = Math.min(x, capacityY - y);
    states.push([x - pourXtoY, y + pourXtoY]);

    // Pour Jug Y into Jug X
    const pourYtoX = Math.min(y, capacityX - x);
    states.push([x + pourYtoX, y - pourYtoX]);

    return states;
  }
}

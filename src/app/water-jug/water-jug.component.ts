import { Component } from '@angular/core';
import { WaterJugLogicService } from '../service/water-jug-logic.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-water-jug',
  templateUrl: './water-jug.component.html',
  styleUrls: ['./water-jug.component.css']
})
export class WaterJugComponent {

  capacityX!: number;
  capacityY!: number;
  target!: number;

  constructor(private waterJugLogicService: WaterJugLogicService, private snackBar: MatSnackBar) { }

  checkSolvability() {
    const result = this.waterJugLogicService.isSolvable(this.capacityX, this.capacityY, this.target);
    /* Add Enums */
    const message = result ? 'Yes, it is possible!' : 'No, it is not possible.';
    this.showToast(message);
  }

  showToast(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}

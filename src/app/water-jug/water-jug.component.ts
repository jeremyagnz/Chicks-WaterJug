import { Component } from '@angular/core';
import { WaterJugLogicService } from '../service/water-jug-logic.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  viewSolvability } from '../enums/message.enum';

@Component({
  selector: 'app-water-jug',
  templateUrl: './water-jug.component.html',
  styleUrls: ['./water-jug.component.css']
})
export class WaterJugComponent {

  capacityX!: number;
  capacityY!: number;
  target!: number;
  loading = false;

  constructor(private waterJugLogicService: WaterJugLogicService, private snackBar: MatSnackBar) { }

  checkSolvability() {
    this.loading = true;
    const result = this.waterJugLogicService.isSolvable(this.capacityX, this.capacityY, this.target);
    const message = result ? viewSolvability.isSolvable : viewSolvability.notSolvable;

    setTimeout(() => {
      this.loading = false;

      this.showToast(message);
    }, 2000);

  }

  showToast(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}

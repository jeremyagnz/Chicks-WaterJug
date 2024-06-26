import { Component } from '@angular/core';

@Component({
  selector: 'app-water-jug',
  templateUrl: './water-jug.component.html',
  styleUrls: ['./water-jug.component.css']
})
export class WaterJugComponent {

  capacityX!: number;
  capacityY!: number;
  target!: number;


  isSolvable(){
  }

}

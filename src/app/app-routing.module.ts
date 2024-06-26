import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterJugComponent } from './water-jug/water-jug.component';

const routes: Routes = [
  {path:'', component:WaterJugComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

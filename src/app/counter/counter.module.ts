import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CounterComponent } from "./components/Counter/counter.component";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CounterComponent
  ],

  exports:[
    CounterComponent
  ]
})


export class CounterModule {}

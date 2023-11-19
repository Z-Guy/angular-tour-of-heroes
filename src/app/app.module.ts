import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [
    
    HeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AppModule { }

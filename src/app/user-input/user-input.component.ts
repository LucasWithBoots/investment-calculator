import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  enteredInitialInvestment!: number;
  enteredAnnualInvestment!: number;
  enteredExpectedReturn!: number;
  enteredDuration!: number;


  onSubmit() {
    console.log(this.enteredInitialInvestment)
  }
}

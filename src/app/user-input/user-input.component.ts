import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InvestmentResultsService} from "../investment-results/investment-results.service";

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

  constructor(private investmentResultsService: InvestmentResultsService) {
  }

  onSubmit() {
    this.investmentResultsService.calculateInvestimentResults(
      {
        initialInvestment: this.enteredInitialInvestment,
        annualInvestment: this.enteredAnnualInvestment,
        expectedReturn: this.enteredExpectedReturn,
        duration: this.enteredDuration,
      }
    )
  }
}

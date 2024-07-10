import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InvestmentResultsService} from '../investment-results/investment-results.service';
import {InvestmentResult} from '../investment-results/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  @Output() send = new EventEmitter<InvestmentResult[]>();
  enteredInitialInvestment: number = 1000;
  enteredAnnualInvestment: number = 200;
  enteredExpectedReturn: number = 5;
  enteredDuration: number = 10;

  constructor(private investmentResultsService: InvestmentResultsService) {
  }

  onSubmit() {
    let results = this.investmentResultsService.calculateInvestimentResults({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    });

    this.send.emit(results);
  }
}

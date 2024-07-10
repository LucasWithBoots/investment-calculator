import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {InvestmentResultsComponent} from './investment-results/investment-results.component';
import {InvestmentResult} from './investment-results/investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  investmentData!: InvestmentResult[];

  showInvestmentResults(event: InvestmentResult[]) {
    this.investmentData = event;
  }
}

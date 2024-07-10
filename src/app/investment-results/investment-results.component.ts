import {Component, Input} from '@angular/core';
import {InvestmentResult} from "./investment.model";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  @Input() data!: InvestmentResult[];
}

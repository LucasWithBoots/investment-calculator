export interface Investment {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

export interface InvestmentRow {
  annualInvestment: number
  interest: number
  totalAmountInvested: number
  totalInterest: number
  valueEndOfYear: number
  year: number
}

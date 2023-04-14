import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-amount',
  templateUrl: './father-amount.component.html',
  styleUrls: ['./father-amount.component.css'],
})
export class FatherAmountComponent {
  public amountTotal: number = 100;

  public depositar(): void {
    this.amountTotal += 100;
  }
}

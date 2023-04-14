import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.css'],
})
export class ChildAmountComponent implements OnChanges {
  @Input()
  public amount: number = 0;

  @Output()
  public notification: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(): void {
    this.sendNotification();
  }

  public sendNotification(): void {
    console.log(`Monto disponible en la billetera: ${this.amount}`);
  }

  public withdraw(): void {
    this.amount -= 100;
    this.notification.emit(this.amount);
  }
}

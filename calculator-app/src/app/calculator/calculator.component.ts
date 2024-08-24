import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  @Input() value1: number = 0;
  @Input() value2: number = 0;
  @Input() operation: string = '';

  @Output() result = new EventEmitter<number>();

  calculate() {
    let res: number = 0;

    switch (this.operation) {
      case 'sum':
        res = this.value1 + this.value2;
        break;
      case 'sub':
        res = this.value1 - this.value2;
        break;
      case 'mul':
        res = this.value1 * this.value2;
        break;
      case 'div':
        res = this.value1 / this.value2;
        break;
      case 'pow':
        res = Math.pow(this.value1, this.value2);
        break;
      case 'sqrt':
        res = Math.sqrt(this.value1);
        break;
    }

    this.result.emit(res);
  }
}

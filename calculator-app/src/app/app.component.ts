import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value1: number = 0;
  value2: number = 0;
  operation: string = 'sum';
  result: number = 0;

  @ViewChild(CalculatorComponent) calculator!: CalculatorComponent;

  onCalculate() {
    this.calculator.calculate();
  }

  setResult(result: number) {
    this.result = result;
  }
}

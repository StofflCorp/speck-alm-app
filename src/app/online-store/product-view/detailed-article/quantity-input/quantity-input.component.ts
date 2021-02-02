import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuantityInputComponent),
    multi: true
  }]
})
export class QuantityInputComponent implements ControlValueAccessor {

  @Input() item;
  @Input() unitLabel: string;
  @Input() min: number;
  @Input() max: number;
  @Input() steps: number;
  @Input() pin: boolean;
  @Input() snaps: boolean;
  amount: number;

  get value(): number { return this.amount; }
  set value(v: number) {
    if (this.amount !== v) {
      this.writeValue(+v.toFixed(2));
    }
  }

  writeValue(obj: number): void {
    this.amount = obj;
    this.onChange(obj);
  }

  onChange = (_: any) => {};
  onTouched = () => {};
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  minOf(n1: number, n2: number) {
    return n1 < n2 ? n1 : n2;
  }

  formatNumber(e: any) {
    e.detail.value = parseFloat(e.detail.value).toFixed(2);
    this.amount = parseFloat(e.detail.value);
  }
}

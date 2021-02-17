import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPositiveValue]'
})
export class PositiveValueDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const numValue = +control.value;
    if(control.value !== null && !isNaN(numValue) && numValue <= 0) {
      return { positiveValue: true };
    }

    return null;
  }
}

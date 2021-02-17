import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchDirective } from './match.directive';
import { PositiveValueDirective } from './positive-value.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MatchDirective,
    PositiveValueDirective
  ],
  exports: [
    MatchDirective,
    PositiveValueDirective
  ]
})
export class ValidatorsModule { }

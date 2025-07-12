import { Component, Input } from '@angular/core';
import { ButtonPropTypes } from '../../../types/button.types';

type ButtonProperties = {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  icon?: string;
  disabled?: boolean;
  class?: string;
  style?: any;
  backgroundColor: string;
  borderColor: string;
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  properties!: ButtonPropTypes;
}

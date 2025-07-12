import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-out-sale',
  templateUrl: './out-sale.component.html',
  styleUrl: './out-sale.component.scss',
})
export class OutSaleComponent {
  @Input()
  outSaleProperties: any
}

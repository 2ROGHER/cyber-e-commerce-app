import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sale-banner',
  templateUrl: './sale-banner.component.html',
  styleUrl: './sale-banner.component.scss',
})
export class SaleBannerComponent {
  @Input()
  saleBannerProperties: any;
}

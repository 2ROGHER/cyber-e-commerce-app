import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  outSaleProperties: any = {
    title: 'Discounts up to -50%',
  };

  saleBannerProps: any = {
    title: 'Big Summer Sale',
    description: 'Commodo fames vitae vitae leo mauris in. Eu consequat.',
    backgroundImage: "assets/img/",
  };
}

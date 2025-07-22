import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  filterbarOptions: string[] = [
    'Brand',
    'Battery capacity',
    'Screen type',
    'Screen size',
    'Screen Diagonal',
    'Protection clas',
  ];
  page = 1;
  productsSelected: number = 0;

  onPageChange(newPage: number): void {
    this.page = newPage;
  }
  constructor() {}
}

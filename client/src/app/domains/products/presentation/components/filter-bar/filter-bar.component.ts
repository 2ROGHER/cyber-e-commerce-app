import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss',
})
export class FilterBarComponent {
  products: any = [
    {
      id: '1',
    },
  ];

  @Input() filterOptions: string[] = [];

  constructor( ) {
    console.log(this.filterOptions);
  }
}

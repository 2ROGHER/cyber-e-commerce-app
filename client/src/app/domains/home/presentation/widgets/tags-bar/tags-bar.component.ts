import { Component } from '@angular/core';

@Component({
  selector: 'app-tags-bar',
  templateUrl: './tags-bar.component.html',
  styleUrl: './tags-bar.component.scss',
})
export class TagsBarComponent {
  tagBarItems: any = [
    {
      id: '1',
      name: 'New Arrival',
    },
    {
      id: '2',
      name: 'Best Seller',
    },
    {
      id: '3',
      name: 'Best Seller',
    },
    {
      id: '4',
      name: 'Best Seller',
    },
    {
      id: '5',
      name: 'Best Seller',
    },
  ];

  constructor() {}
}

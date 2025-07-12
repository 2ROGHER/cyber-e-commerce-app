import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrl: './category-list-item.component.scss'
})
export class CategoryListItemComponent {
  @Input()
  properties!: any;
}

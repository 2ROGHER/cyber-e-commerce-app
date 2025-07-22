import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrl: './menu-list-item.component.scss',
})
export class MenuListItemComponent {
  @Input() listItemLabel: string = '';
  @Output() listItemSelected = new EventEmitter<string>();

  chooseItemListOption(): void {
    console.log(`selected ${this.listItemLabel}`);
    this.listItemSelected.emit(this.listItemLabel);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-selection',
  templateUrl: './filter-selection.component.html',
  styleUrl: './filter-selection.component.scss',
})
export class FilterSelectionComponent {
  @Input() menuOptions: string[] = [];
  @Input() label: string = '';
  @Input() selected: string = '';
  @Input() filterOptions: string[] = [];

  @Output() listItemsSelected = new EventEmitter<string>();

  isOpen: boolean = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  chooseOption(option: string): void {
    this.listItemsSelected.emit(option);
    this.selected = option;
    this.isOpen = false;
  }
}

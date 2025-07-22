import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrl: './drop-down-menu.component.scss',
})
export class DropDownMenuComponent {
  @Input() label: string = '';
  @Input() menuOptions: string[] = [];
  @Input() selected: string | null = null;
  @Output() selectedOption = new EventEmitter<string>();

  isOpen: boolean = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  chooseOption(option: string): void {
    if (this.selected === option) return;
    this.selectedOption.emit(option);
    this.selected = option;
    this.isOpen = false;
  }

  // Close the dropdown menu when the use makes click
  @HostListener('document:click', [`$event`])
  handleClickOutside(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target.closest('.dropdown')) this.isOpen = false;
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Output() remove = new EventEmitter<void>();

  removeCard() {
    this.remove.emit();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Output() addCard = new EventEmitter<void>();

  addNewCard() {
    this.addCard.emit();
  }
}

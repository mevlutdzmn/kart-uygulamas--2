import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cards = [
    { title: 'Kart 1', content: 'Bu kartın içeriği 1' },
    { title: 'Kart 2', content: 'Bu kartın içeriği 2' }
  ];

  addCard() {
    this.cards.push({
      title: `Kart ${this.cards.length + 1}`,
      content: `Bu kartın içeriği ${this.cards.length + 1}`
    });
  }

  removeCard(index: number) {
    this.cards.splice(index, 1);
  }
}



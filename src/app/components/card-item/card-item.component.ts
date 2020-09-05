import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
// Componentes anidados
// Componentes de Angular Material
export class CardItemComponent implements OnInit {
  // It's the data to display on the item card
  @Input('sourceArray') data;
  // Emitter to send value selected
  @Output() clickedCard = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  // Send values of card clicked to the parent component
  clickCard(): void {
    this.clickedCard.emit(this.data);
  }
}

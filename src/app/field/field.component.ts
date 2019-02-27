import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  host: {class: 'game-field'},
})

export class FieldComponent {
  @Input() public result: TResult;
  @Input() public playerHand: TCard[];
  @Input() public room: TRoom;
  @Output() public onStandClicked: EventEmitter<void> = new EventEmitter();
}

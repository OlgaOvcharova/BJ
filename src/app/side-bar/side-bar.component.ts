import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  host: { class: 'side-bar' },
})

export class SideBarComponent {

  @Input() public result: TResult;
  @Input() public room: TRoom;

  @Output() public newGameClicked: EventEmitter<void> = new EventEmitter();
  @Output() public onHitClicked: EventEmitter<void> = new EventEmitter();
  @Output() public onStandClicked: EventEmitter<void> = new EventEmitter();

}

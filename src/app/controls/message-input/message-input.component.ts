import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  @Output() userMessage: EventEmitter<any> = new EventEmitter<any>();
  public message = '';
  constructor() { }

  ngOnInit() {
  }

  public postMessage() {
    this.userMessage.emit(this.message);
    this.message = '';
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {
  private bubbleType = 'bot';
  @Input() set type(t: string) {
    this.bubbleType = t;
  }
  bubbleText = '...';
  @Input() set text(val: string) {
    this.bubbleText = val;
  }
  constructor() { }

  ngOnInit() {
  }

}

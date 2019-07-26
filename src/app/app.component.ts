import {Component, ElementRef, ViewChild} from '@angular/core';
import {DialogFlowService} from './responce/services/dialog-flow.service';
import {Message} from './responce/models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('chart', {static: false, read: ElementRef}) private chartArea: ElementRef;

  public chatMessages: any[] = [
      {type: 'bot', message: 'Hello'},
      {type: 'user', message: 'My I need your help.'},
      {type: 'bot', message: 'Sure I would love to help but first may I know your name?.'},
  ];

  constructor(private dialogFlow: DialogFlowService) {}

  onUserMessage(message: string) {
      this.dialogFlow.converse(message)
          .then(res => {
              const speech = res.result.fulfillment.speech;
              console.log('Bot Message: ', res.result);
              this.chatMessages.push({type: 'bot', message: speech});
              setTimeout(() => {
                  this.chartArea.nativeElement.scrollTop = this.chartArea.nativeElement.scrollHeight;
              }, 10);

          });

      this.chatMessages.push({type: 'user', message});
      this.chartArea.nativeElement.scrollTop = this.chartArea.nativeElement.scrollHeight;
  }
}

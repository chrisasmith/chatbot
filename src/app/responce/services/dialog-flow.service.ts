import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import { environment } from '../../../environments/environment';
import {Message} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class DialogFlowService {
    readonly token = environment.dialogflow.angularBot;
    readonly client = new ApiAiClient({ accessToken: this.token });

    conversation = new BehaviorSubject<Message[]>([]);

    constructor() {}

    // Sends and receives messages via DialogFlow
    converse(msg: string): Promise {
        const userMessage = new Message(msg, 'user');
        this.update(userMessage);

        return this.client.textRequest(msg);
    }

    // Adds message to source
    update(msg: Message) {
        this.conversation.next([msg]);
    }

}

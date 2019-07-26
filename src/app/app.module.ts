import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BubbleComponent } from './responce/bubble/bubble.component';
import { MessageInputComponent } from './controls/message-input/message-input.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardAvatar, MatCardModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BubbleComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule
  ],
    exports: [
        MatInputModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

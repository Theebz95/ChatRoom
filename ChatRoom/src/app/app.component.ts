import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/ChatService';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div style="text-align:center">
      <h1 class="app-title">
        Welcome to {{ title }}!
      </h1>
    </div>
    <div class="messages">

    </div>
    <div class="your-message">
      <mat-form-field class="message-container">
        <textarea matInput placeholder="Leave a comment"></textarea>
      </mat-form-field>
      <button mat-raised-button>Send</button>
    </div>
  </div>`,
  styleUrls: ['./app.component.scss']
  })
  
export class AppComponent {
  title = 'ChatRoom app';
  constructor(private chat: ChatService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    })
  }
  sendMessage() {
    this.chat.sendMsg("Test Message");
  }

}

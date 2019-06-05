import { Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-root',
  template: `
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div class="container">
    <div style="text-align:center">
      <h1 class="app-title">
        Welcome to {{ title }}!
      </h1>
    </div>
    <div class="messages">

    </div>
    <div class="your-message">
      <input type="text" />
      <input type="submit" />
    </div>
  </div>`,
  styleUrls: ['./app.component.scss']
  })
  
export class AppComponent {
  title = 'ChatRoom app';
}

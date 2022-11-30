import { Component } from '@angular/core';
import {WebSocketAPI} from "./api/websocket-api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websocket-angular';

  webSocketAPI:any;
  greeting: any;
  name: string = '';
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI();

  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.name);
    // this.name = this.webSocketAPI.message.content;
  }

  handleMessage(message:any){
    this.greeting = message;
  }
}

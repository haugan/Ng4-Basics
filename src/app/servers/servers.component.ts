import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .list-group-item {
      color: gray;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `New server was created! (${this.serverName})`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

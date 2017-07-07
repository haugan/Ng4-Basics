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
  allowAddServer = false;
  serverAddStatus = 'No server is created.';
  serverName = '';

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverAddStatus = `
      New server was created! (${this.serverName})
    `;
    this.serverName = '';
  }
}

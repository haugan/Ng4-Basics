import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 0;
  serverStatus = '';

  constructor() {
    this.serverId = Math.floor(Math.random() * 1111) + 1;
    this.serverStatus = (Math.random() > 0.5) ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }

  getStatusColor() {
    return (this.serverStatus === 'online') ? 'green' : 'red';
  }
}

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
  serverAddStatus = 'No server is created.';
  serverCreated = false;
  serverName = '';
  servers = [''];

  ngOnInit() {
  }

  onAddServer() {
    this.serverAddStatus = `New server was added! (Name: ${this.serverName})`;
    this.serverCreated = true;
    this.serverName = '';
    this.servers.push(this.serverName);
  }
}

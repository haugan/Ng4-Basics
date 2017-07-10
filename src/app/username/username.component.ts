import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styles: [`
    .white-text {
      color: papayawhip;
    }
  `]
})
export class UsernameComponent implements OnInit {
  log = [];
  showDetails = false;
  username = 'haugis';
  password = 'm0n0n0k3';

  constructor() { }

  ngOnInit() {
  }

  onShowDetailsBtnClick() {
    this.log.push(new Date());
    this.showDetails = !this.showDetails;
  }
}

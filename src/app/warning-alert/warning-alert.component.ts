import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p class="warning-alert">
      Oops! Something is wrong.
    </p>`,
  styles: [`
    .warning-alert {
        color: grey;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
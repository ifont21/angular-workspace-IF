import { Component } from '@angular/core';

@Component({
  selector: 'lib-app-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent {
  isAuthenticated = false;

  constructor() {}

  logIn() {
    return (this.isAuthenticated = !this.isAuthenticated);
  }
}

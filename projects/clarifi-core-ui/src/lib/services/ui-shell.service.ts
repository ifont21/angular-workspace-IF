import { UiShellComponent } from './../components/ui-shell/ui-shell.component';
import { Routes, Route } from '@angular/router';
import { Application } from '../utils';

export class Shell {
  static childRoutes(routes: Routes, app: Application): Route {
    return {
      path: '',
      component: UiShellComponent,
      children: routes,
      data: { app }
    };
  }
}

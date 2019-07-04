import { FakeComponent } from './fake/fake.component';
import { RouterModule, Routes } from '@angular/router';
import { GlobalConstants, Shell } from 'clarifi-core-ui';

const routes: Routes = [
  Shell.childRoutes(
    [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'docProcessing'
      },
      {
        path: 'docProcessing',
        component: FakeComponent
      }
    ],
    GlobalConstants.DOC_PROCESSING
  )
];

export const RoutesModule = RouterModule.forRoot(routes, {
  enableTracing: false
});

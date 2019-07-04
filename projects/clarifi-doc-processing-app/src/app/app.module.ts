import { FakeComponent } from './fake/fake.component';
import { ClarifiCoreUiModule } from 'clarifi-core-ui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutesModule } from './app.routes';

@NgModule({
  declarations: [AppComponent, FakeComponent],
  imports: [BrowserModule, RoutesModule, ClarifiCoreUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

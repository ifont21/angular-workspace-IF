import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { CoreFeaturesModule } from './features/core-features.module';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { NgModule } from '@angular/core';
import { UiShellComponent } from './components/ui-shell/ui-shell.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatMenuModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UiShellComponent, UiHeaderComponent],
  imports: [
    RouterModule,
    UiKitModule,
    CoreFeaturesModule,
    CommonModule,

    MatToolbarModule,
    MatMenuModule
  ],
  exports: [UiKitModule, CoreFeaturesModule]
})
export class ClarifiCoreUiModule {}

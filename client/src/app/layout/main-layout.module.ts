import { NgModule } from '@angular/core';
import { CommonLayoutsModule } from './commons/common-layouts.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonLayoutsModule, LayoutsModule, SharedModule],
  exports: [],
  providers: [],
})
export class MainLayoutModule {}

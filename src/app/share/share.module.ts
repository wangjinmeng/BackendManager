import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { ShareBoxComponent } from './component/share-box/share-box.component';
import { ShareAlertComponent } from './component/share-alert/share-alert.component';
import { ShareCalloutComponent } from './component/share-callout/share-callout.component';
import { SharePageBarComponent } from './component/share-page-bar/share-page-bar.component';
import { ShareProgressBarComponent } from './component/share-progress-bar/share-progress-bar.component';
import { ShareFormTextComponent } from './component/share-form-text/share-form-text.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ShareBoxComponent,
    ShareAlertComponent,
    ShareCalloutComponent,
    SharePageBarComponent,
    ShareProgressBarComponent,
    ShareFormTextComponent
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ShareBoxComponent,
    ShareAlertComponent,
    ShareCalloutComponent,
    SharePageBarComponent,
    ShareProgressBarComponent,
    ShareFormTextComponent
  ]
})
export class ShareModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { FigureComponent } from './figure.component';
import { WriteComponent } from './write/write.component';
import { ReadComponent } from './read/read.component';
import { FigureLandingPageComponent } from './figure-landing-page/figure-landing-page.component';
import { CameraComponent } from './camera/camera.component';
import { FigureInfoService } from '../services/figure-info.service';
import { GoogleVisionService } from '../services/google-vision.service';
import { Dispatcher } from './tokens';
import { FigureViewComponent } from './figure-view/figure-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FigureComponent,
    WriteComponent,
    ReadComponent,
    FigureLandingPageComponent,
    CameraComponent,
    FigureViewComponent,
  ],
  exports: [
    FigureComponent,
    WriteComponent,
    ReadComponent,
    FigureLandingPageComponent,
    CameraComponent,
    FigureViewComponent,
  ],
  providers: [
    GoogleVisionService,
    FigureInfoService,
    {
      provide: Dispatcher, useFactory: (store) => store.dispatch,
      deps: [Store]
    },
  ],
})
export class FigureModule { }

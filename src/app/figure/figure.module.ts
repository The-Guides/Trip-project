import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { FigureComponent } from './figure.component';
import { FigureLandingPageComponent } from './figure-landing-page/figure-landing-page.component';
import { CameraComponent } from './camera/camera.component';
import { FigureInfoService } from '../services/figure-info.service';
import { GoogleVisionService } from '../services/google-vision.service';
import { FigureViewModelSelector } from './tokens';
import { FigureViewComponent } from './figure-view/figure-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FigureComponent,
    FigureLandingPageComponent,
    CameraComponent,
    FigureViewComponent,
  ],
  exports: [
    FigureComponent,
    FigureLandingPageComponent,
    CameraComponent,
    FigureViewComponent,
  ],
  providers: [
    GoogleVisionService,
    FigureInfoService,
    {
      provide: FigureViewModelSelector, useFactory: (store) => store.select((state) => state.figure.figureViewModel),
      deps: [Store]
    }
  ],
})
export class FigureModule { }

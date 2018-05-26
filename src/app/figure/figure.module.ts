import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { FigureComponent } from './figure.component';
import { CameraComponent } from './camera/camera.component';
import { FigureInfoService } from '../services/figure-info.service';
import { GoogleVisionService } from '../services/google-vision.service';
import { FigureViewModelSelector, ShowPopupSelector } from './selectors';
import { FigureViewComponent } from './figure-view/figure-view.component';
import { AppState } from '../app.state';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FigureComponent,
    CameraComponent,
    FigureViewComponent,
  ],
  exports: [
    FigureComponent,
    CameraComponent,
    FigureViewComponent,
  ],
  providers: [
    GoogleVisionService,
    FigureInfoService,
    {
      provide: FigureViewModelSelector, useFactory: (store) => store.select((state: AppState) => state.figure.figureViewModel),
      deps: [Store]
    },
    {
      provide: ShowPopupSelector, useFactory: (store) => store.select((state: AppState) => state.figure.isPopupVisible),
      deps: [Store]
    }
  ],
})
export class FigureModule { }

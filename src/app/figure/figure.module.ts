import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';

import { FigureComponent } from './figure.component';
import { CameraComponent } from './camera/camera.component';
import { FigureInfoService } from '../services/figure-info.service';
import { GoogleVisionService } from '../services/google-vision.service';
import { FigureViewModelSelector, ShowPopupSelector, LoadingSelector, MarkersSelector } from './selectors';
import { FigureViewComponent } from './figure-view/figure-view.component';
import { AppState } from '../app.state';
import { PopupBackgroundComponent } from '../shared/popup-background/popup-background.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { GoogleMapsComponent } from '../shared/google-map/google-maps.components';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOG9LZXqqVGOi7U6xFiN4J0_8ZhrLAfWI'
    })
  ],
  declarations: [
    FigureComponent,
    CameraComponent,
    FigureViewComponent,
    PopupBackgroundComponent,
    LoadingComponent,
    GoogleMapsComponent
  ],
  exports: [
    FigureComponent,
    CameraComponent,
    FigureViewComponent,
    PopupBackgroundComponent,
    LoadingComponent,
    GoogleMapsComponent
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
    },
    {
      provide: LoadingSelector, useFactory: (store) => store.select((state: AppState) => state.figure.loading),
      deps: [Store]
    },
    {
      provide: MarkersSelector, useFactory: (store) => store.select((state: AppState) => state.figure.markers),
      deps: [Store]
    }
  ],
})
export class FigureModule { }

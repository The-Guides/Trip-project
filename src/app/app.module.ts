import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { figureReducers } from './reducers/figure.reducer';
import { FigureModule } from './figure/figure.module';
import { WriteComponent } from './figure/write/write.component';
import { FigureComponent } from './figure/figure.component';
import { FigureEffects } from './effects/figure.effects';
import { GoogleVisionService } from './services/google-vision.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FigureModule,
    HttpClientModule,
    StoreModule.forRoot({
      figure: figureReducers
    }),
    EffectsModule.forRoot([FigureEffects]),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

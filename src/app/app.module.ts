import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { FigureModule } from './figure/figure.module';
import { WriteComponent } from './figure/write/write.component';
import { FigureComponent } from './figure/figure.component';
import { EffectsModule } from '@ngrx/effects';
import { FigureEffects } from './effects/figure.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FigureModule,
    StoreModule.forRoot({
      figure: reducer
    }),
    EffectsModule.forRoot([FigureEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

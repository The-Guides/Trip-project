import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FigureComponent } from './figure.component';
import { WriteComponent } from './write/write.component';
import { ReadComponent } from './read/read.component';
import { FigureLandingPageComponent } from './figure-landing-page/figure-landing-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FigureComponent,
    WriteComponent,
    ReadComponent,
    FigureLandingPageComponent
  ],
  exports: [
    FigureComponent,
    WriteComponent,
    ReadComponent,
    FigureLandingPageComponent]
})
export class FigureModule { }

import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Dispatcher } from './tokens';
import { FindFigure } from '../actions/figure.actions';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent {

  constructor(@Inject(forwardRef(() => Dispatcher)) private dispatcher, private store: Store<AppState>) { }

  public findPicture(base64: string) {
    const comaIndex = base64.indexOf(',');
    base64 = base64.substring(comaIndex + 1);
    this.store.dispatch(new FindFigure(base64));
  }
}

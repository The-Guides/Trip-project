import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Dispatcher } from './tokens';
import { FindFigure } from '../actions/figure.actions';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Figure } from '../models/figure.model';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent {
  public figureViewModel: Observable<Figure>;

  constructor(private store: Store<AppState>) {
    this.figureViewModel = store.select('figure');
  }

  public findPicture(base64: string) {
    const comaIndex = base64.indexOf(',');
    base64 = base64.substring(comaIndex + 1);
    this.store.dispatch(new FindFigure(base64));
  }
}

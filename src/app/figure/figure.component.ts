import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { FigureViewModelSelector, ShowPopupSelector, LoadingSelector } from './selectors';
import { FindFigure, TogglePopup, ToggleLoading } from '../actions/figure.actions';
import { AppState } from '../app.state';
import { Store, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Figure } from '../models/figure.model';
import { FigureViewModel } from './figure-view/figure-view.viewmodel';
import { Dispatcher } from '../dispatcher';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent {

  constructor(
    @Inject(forwardRef(() => FigureViewModelSelector))
    public figureViewModel: Observable<FigureViewModel>,
    @Inject(forwardRef(() => Dispatcher))
    private dispatcher: Dispatcher,
    @Inject(forwardRef(() => ShowPopupSelector))
    public showPopup: Observable<boolean>,
    @Inject(forwardRef(() => LoadingSelector))
    public loadingScreen: Observable<boolean>
  ) { }

  public findPicture(base64: string) {
    const comaIndex = base64.indexOf(',');
    base64 = base64.substring(comaIndex + 1);
    this.dispatcher.dispatch(new FindFigure(base64));
    this.dispatcher.dispatch(new ToggleLoading({ loading: true }));
  }

  public togglePopup() {
    this.dispatcher.dispatch(new TogglePopup({ isPopupVisible: false }));
  }
}


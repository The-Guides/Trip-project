import { Component, OnInit, Inject, forwardRef } from "@angular/core";
import {
  FigureViewModelSelector,
  TogglePopupSelector,
  ToggleLoadingSelector,
  FoundedMarkersSelector
} from "./selectors";
import {
  FindFigure,
  TogglePopup,
  ToggleLoading,
  FetchAllFigures
} from "../actions/figure.actions";
import { AppState } from "../app.state";
import {
  Store,
  createFeatureSelector,
  createSelector,
  select
} from "@ngrx/store";
import { Observable } from "rxjs";
import { Figure } from "../models/figure.model";
import { FigureViewModel } from "./figure-view/figure-view.viewmodel";
import { Dispatcher } from "../dispatcher";
import { FigureActions } from '../actions/figure.actions';
import { MarkersSelector } from './selectors';
import { Marker } from '../shared/google-map/marker';

@Component({
  selector: "app-figure",
  templateUrl: "./figure.component.html",
  styleUrls: ["./figure.component.css"]
})
export class FigureComponent implements OnInit {
  constructor(
    @Inject(forwardRef(() => FigureViewModelSelector))
    public figureViewModel: Observable<FigureViewModel>,
    @Inject(forwardRef(() => Dispatcher))
    private dispatcher: Dispatcher,
    @Inject(forwardRef(() => TogglePopupSelector))
    public showPopup: Observable<boolean>,
    @Inject(forwardRef(() => ToggleLoadingSelector))
    public loadingScreen: Observable<boolean>,
    @Inject(forwardRef(() => MarkersSelector))
    public markers: Observable<Marker[]>,
    @Inject(forwardRef(() => FoundedMarkersSelector))
    public foundedMarkers: Observable<Marker[]>,
  ) { }

  ngOnInit(): void {
    this.dispatcher.dispatch(new FetchAllFigures());
  }

  public findPicture(base64: string) {
    const comaIndex = base64.indexOf(",");
    base64 = base64.substring(comaIndex + 1);
    this.dispatcher.dispatch(new FindFigure(base64));
    this.dispatcher.dispatch(new ToggleLoading(true));
  }

  public togglePopup() {
    this.dispatcher.dispatch(new TogglePopup(false));
  }
  public scrollToSelection(eventData) {
    let selectedNav = eventData.target.className;
    let lastClass = selectedNav.substring(selectedNav.lastIndexOf(' ') + 1);
    let wantedSection = lastClass.substring(0, lastClass.lastIndexOf('-'));

    document.querySelector('#' + wantedSection).scrollIntoView({
      behavior: 'smooth'
    });
  }

}

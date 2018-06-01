import { InjectionToken } from '@angular/core';
import { FigureViewModel } from './figure-view/figure-view.viewmodel';
import { Observable } from 'rxjs';
import { Marker } from '../shared/google-map/marker';

export const FigureViewModelSelector = new InjectionToken<Observable<FigureViewModel>>('Provider for the view model');
export const TogglePopupSelector = new InjectionToken<Observable<boolean>>('Provider for the selector for the popup');
export const ToggleLoadingSelector = new InjectionToken<Observable<boolean>>('Provider for the selector for the toggleLoading screen');
export const MarkersSelector = new InjectionToken<Observable<Marker[]>>('Provider for the selector for the supported monuments markers');
export const FoundedMarkersSelector = new InjectionToken<Observable<Marker[]>>('Provider for the selector for the foundedMarkers');

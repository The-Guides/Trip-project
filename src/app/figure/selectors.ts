import { InjectionToken } from '@angular/core';
import { FigureViewModel } from './figure-view/figure-view.viewmodel';
import { Observable } from 'rxjs';

export const FigureViewModelSelector = new InjectionToken<Observable<FigureViewModel>>('This will provide the view model');
export const ShowPopupSelector = new InjectionToken<Observable<boolean>>('This will the selector for the show popup');
export const LoadingSelector = new InjectionToken<Observable<boolean>>('This will the selector for the show popup');


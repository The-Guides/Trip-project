import { InjectionToken } from '@angular/core';
import { FigureViewModel } from './figure-view/figure-view.viewmodel';
import { Observable } from 'rxjs';

// export const Dispatcher = new InjectionToken<Function>('this will provide the dispatcher');
export const FigureViewModelSelector = new InjectionToken<Observable<FigureViewModel>>('This will provide the view model');


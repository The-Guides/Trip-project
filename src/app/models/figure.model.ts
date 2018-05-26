import { FigureViewModel } from '../figure/figure-view/figure-view.viewmodel';

export interface Figure {
    figureViewModel: FigureViewModel;
    isPopupVisible: boolean;
    loading: boolean;
}

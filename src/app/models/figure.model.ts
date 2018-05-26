import { FigureViewModel } from '../figure/figure-view/figure-view.viewmodel';
import { Marker } from '../shared/google-map/marker';

export interface Figure {
    figureViewModel: FigureViewModel;
    isPopupVisible: boolean;
    loading: boolean;
    markers: Marker[];
}

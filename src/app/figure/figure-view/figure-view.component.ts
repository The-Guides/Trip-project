import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Figure } from '../../models/figure.model';
import { FigureViewModel } from './figure-view.viewmodel';

@Component({
  selector: 'app-figure-view',
  templateUrl: './figure-view.component.html',
  styleUrls: ['./figure-view.component.css']
})
export class FigureViewComponent {

  private selectedImgIndex = 0;
  private imagesLength = -1;
  private _viewModel: FigureViewModel;

  @Input()
  public set viewModel(viewModel) {
    this._viewModel = viewModel;
  }

  public get viewModel() {
    return this._viewModel;
  }

}

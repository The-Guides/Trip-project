import { Component, OnInit, Input, OnChanges, HostBinding, ViewChild, EventEmitter, Output } from '@angular/core';
import { Figure } from '../../models/figure.model';
import { FigureViewModel } from './figure-view.viewmodel';

@Component({
  selector: 'app-figure-view',
  templateUrl: './figure-view.component.html',
  styleUrls: ['./figure-view.component.css']
})
export class FigureViewComponent {

  public selectedImgIndex = 0;
  public showMessage: boolean;

  private imagesLength = -1;
  private _viewModel: FigureViewModel;

  @Output()
  public togglePopupVisibility = new EventEmitter();

  @Input()
  public set viewModel(viewModel) {

    this.showMessage = viewModel != null
      && viewModel.images != null
      && viewModel.images.length > 0;

    // If there is no images we consider that there is no
    // that there is no figure and we show message
    if (this.showMessage) {
      this.imagesLength = viewModel.images.length;
    }

    this._viewModel = viewModel;
  }

  public get viewModel() {
    return this._viewModel;
  }

  public nextImg() {
    if (this.selectedImgIndex >= this.imagesLength - 1) {
      this.selectedImgIndex = 0;
    } else {
      this.selectedImgIndex++;
    }
  }
}

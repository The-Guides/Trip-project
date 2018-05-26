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

  @ViewChild('background')
  private background: any;

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

  @Input()
  public set showPopup(showPopup: boolean) {
    this.background.nativeElement.style.display = showPopup ? '' : 'none';
  }

  public get viewModel() {
    return this._viewModel;
  }

  public nextImg() {
    if (this.selectedImgIndex > this.imagesLength) {
      this.selectedImgIndex = 0;
    } else {
      this.selectedImgIndex++;
    }
  }

  public prevImg() {
    if (this.selectedImgIndex <= 0) {
      this.selectedImgIndex = this.imagesLength;
    } else {
      this.selectedImgIndex--;
    }
  }

  public hidePopup() {
    this.togglePopupVisibility.emit();
  }
}

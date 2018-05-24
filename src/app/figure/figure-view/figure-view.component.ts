import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Figure } from '../../models/figure.model';
import { FigureViewModel } from './figure-view.viewmodel';

@Component({
  selector: 'app-figure-view',
  templateUrl: './figure-view.component.html',
  styleUrls: ['./figure-view.component.css']
})
export class FigureViewComponent implements OnChanges {

  @Input()
  public viewModel: FigureViewModel;

  constructor() { }
  ngOnChanges(): void {
    console.log(this.viewModel);
  }
}

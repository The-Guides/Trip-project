import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Figure } from '../../models/figure.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  public tutorials: Observable<Figure[]>;

  constructor(public store: Store<AppState>) {
    this.tutorials = store.select('figure');
  }

}

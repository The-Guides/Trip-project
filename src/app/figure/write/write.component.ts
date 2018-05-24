import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddTutorial } from '../../actions/figure.actions';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent {

  constructor(private store: Store<AppState>) {
  }

  private addTutorial(name: string, url: string) {
    this.store.dispatch(new AddTutorial({ name: name, description: 'some', imgUrl: url }));
  }
}

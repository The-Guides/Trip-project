import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FigureInfoService {
    private readonly url = 'https://trip-205110.firebaseio.com/figures/';
    constructor(private db: AngularFireDatabase) { }

    public getFigureDetails(figureId: string) {
        return this.db.object('figures/' + figureId).valueChanges();
    }

    public getAllFigures() {
       return this.db.object('figures/').valueChanges();
    }
}

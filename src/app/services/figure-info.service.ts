import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FigureInfoService {
    private readonly url = 'https://trip-205110.firebaseio.com/figures/';
    constructor(private http: HttpClient) { }

    public getFigureDetails(figureId: string) {
        return this.http.get(this.url + figureId);
    }
}

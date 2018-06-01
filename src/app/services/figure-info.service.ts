import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { map } from "rxjs/operators";
import { FigureViewModel } from "../figure/figure-view/figure-view.viewmodel";
import { Marker } from "../shared/google-map/marker";

@Injectable()
export class FigureInfoService {
  private readonly url = "https://trip-205110.firebaseio.com/figures/";
  constructor(private db: AngularFireDatabase) { }

  public getFigureDetails(figureId: string) {
    return this.db.object("figures/" + figureId).valueChanges();
  }

  public getAllFigures() {
    return this.db
      .list("figures/")
      .valueChanges()
      .pipe(
        map((response: FigureViewModel[]) => {
          return response.map(figureVm => {
            return {
              latitude: figureVm.locations.latitude,
              longitude: figureVm.locations.longitude,
              draggable: false,
              name: figureVm.name
            } as Marker;
          });
        })
      );
  }
}

import { Component, Input } from "@angular/core";
import { MouseEvent } from "@agm/core";
import { Marker } from "./marker";

@Component({
  selector: "app-google-map",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent {
  // google maps zoom level
  public zoom = 13;

  // initial center position for the map
  public lat = 42.6977;
  public lng = 23.3219;

  @Input()
  public markers: Marker[];

  @Input()
  public foundedMarkers: Marker[];
}

// just an interface for type safety.

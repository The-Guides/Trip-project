import { Component } from "@angular/core";
import { MouseEvent } from "@agm/core";

@Component({
  selector: "app-google-map",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent {
  // google maps zoom level
  zoom = 13;

  // initial center position for the map
  lat = 42.6977;
  lng = 23.3219;

  markers: Marker[] = [
    {
      lat: 42.694982,
      lng: 23.33531,
      draggable: false,
      name: "Националната библиотека „Св. св. Кирил и Методий"
    },
    {
      lat: 42.695841,
      lng: 23.33252,
      draggable: false,
      name: "Народно събрание"
    },

  ];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  name: string;
}

import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Figure } from "../../models/figure.model";

export interface FigureViewModel {
  name: string;
  description: string;
  images: string[];
  locations: {
    latitude: number;
    longitude: number;
  };
}

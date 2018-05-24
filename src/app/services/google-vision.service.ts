import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleVisionService {
    private readonly url = `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBOG9LZXqqVGOi7U6xFiN4J0_8ZhrLAfWI`;
    constructor(private http: HttpClient) {

    }
    public findFigure(img: string) {
        return this.http.post(this.url, getRequestType(img));
    }
}

export interface LandMarkAnnotations {
    description: string;
    mid: string;
}

export interface GoogleVisionResponse { responses: [{ landmarkAnnotations: [LandMarkAnnotations] }]; }


function getRequestType(img) {
    return {
        requests: [{
            image: {
                content: img
            },
            features: [
                {
                    type: 'LANDMARK_DETECTION'
                }
            ]
        }],
    };
}

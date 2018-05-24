export class GoogleVisionModel {

    public image = {
        content: ''
    };

    public features = [
        {
            type: 'LANDMARK_DETECTION'
        }
    ];

    constructor(private content: string) {
        this.image.content = content;
    }
}

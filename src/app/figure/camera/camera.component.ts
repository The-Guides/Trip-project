import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {

  @ViewChild('input')
  private input;
  private fileReader: FileReader;

  @Output()
  public findPicture = new EventEmitter<string>();

  constructor() {
    this.fileReader = new FileReader();
  }

  public sendImage() {
    const selectedFle = this.input.nativeElement.files[0];
    this.fileReader.readAsDataURL(selectedFle);
    this.fileReader.onload = (event: any) => {
      // NOTE: event.target point to FileReader
      let contents = event.target.result;
      const comaIndex = contents.indexOf(',');
      contents = contents.substring(comaIndex + 1);
      //////
      this.findPicture.emit(contents);
    };

  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-popup-background',
  templateUrl: './popup-background.component.html',
  styleUrls: ['./popup-background.component.css']
})
export class PopupBackgroundComponent {

  @ViewChild('background')
  private background: any;

  @Input()
  public set showPopup(showPopup: boolean) {
    this.background.nativeElement.style.display = showPopup ? '' : 'none';
  }

  @Output()
  public togglePopupVisibility = new EventEmitter();

  public hidePopup() {
    this.togglePopupVisibility.emit();
  }

}

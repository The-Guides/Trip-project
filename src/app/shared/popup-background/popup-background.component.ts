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
    document.body.style.overflow = showPopup ? 'hidden' : '';

    this.background.nativeElement.style.display = showPopup ? '' : 'none';
  }

  @Input()
  public showCloseButton: boolean;

  @Output()
  public togglePopupVisibility = new EventEmitter();

  public hidePopup() {
    this.togglePopupVisibility.emit();
  }

}

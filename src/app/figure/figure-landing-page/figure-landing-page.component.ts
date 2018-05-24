import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-figure-landing-page',
  templateUrl: './figure-landing-page.component.html',
  styleUrls: ['./figure-landing-page.component.css']
})
export class FigureLandingPageComponent implements AfterViewInit {

  private slideIndex = 1;

  @ViewChildren('mySlides')
  private elements;

  constructor() {
  }
  ngAfterViewInit(): void {
    this.showDivs(this.slideIndex);
  }

  public plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  public showDivs(n) {
    // let i;
    // if (n > this.elements.length) {
    //   this.slideIndex = 1
    // }
    // if (n < 1) {
    //   this.slideIndex = this.elements.length
    // }
    // this.elements.forEach(element => {
    //   element.nativeElement.style.display = "none";
    // });
    // if (this.elements[this.slideIndex - 1] != null) {
    //   this.elements[this.slideIndex - 1].nativeElement.style.display = "block";
    // }
  }
}

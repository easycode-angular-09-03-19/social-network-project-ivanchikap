import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appSlider]'
})
export class SliderDirective {
  context;
  index = 0;

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}

  @Input('appSliderFrom') img;

  ngOnInit(): void {
    this.context = {
      $implicit: this.img[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };

    this.vcr.createEmbeddedView(this.tpl, this.context);
  }

  next() {
    this.index++;
    if (this.index >= this.img.length) {
      this.index = 0;
    }
    this.context.$implicit = this.img[this.index];
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.img.length - 1;
    }
    this.context.$implicit = this.img[this.index];
  }
}

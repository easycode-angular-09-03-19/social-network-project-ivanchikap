import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appImgLoader]'
})
export class ImgLoaderDirective implements OnInit, OnChanges{
  @Input('appImgLoader') imgSrc: string;
  @HostBinding('style.opacity') opacity: number;
  @HostBinding('style.transition') transition: string;
  @HostBinding('src') src: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.transition = 'opacity 0.3s easy-in';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.opacity = 0;
    this.loadImg();
  }

  loadImg() {
    const img = new Image();
    img.src = this.imgSrc;
    img.onload = () => this.onLoadImgHandler();
  }

  onLoadImgHandler() {
    this.src = this.imgSrc;
    this.opacity = 1;
  }
}

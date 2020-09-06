import {
  Component,
  OnInit,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TimelineLite, Back, Power1, gsap } from 'gsap';
import { Subscription, fromEvent } from 'rxjs';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-jeesap',
  templateUrl: './jeesap.component.html',
  styleUrls: ['./jeesap.component.scss'],
})
export class JeesapComponent implements OnInit {
  tl: TimelineLite = new TimelineLite();
  @ViewChild('box1', { static: false }) box: ElementRef;
  @ViewChildren('btn') btnContainers: QueryList<ElementRef>;
  clickedElement: Subscription = new Subscription();
  tilted: boolean = false;
  rotate: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.tween();
    this.clickedElement = fromEvent(this.box.nativeElement, 'click').subscribe(
      () => {
        this.shake();
      }
    );
    this.scroll();
  }

  scroll() {
    gsap.to('#box2', {
      scrollTrigger: {
        trigger: '#box2',
        start: 'top 80%',
        end: '+=400s',
        // scrub: 1,
        toggleActions: 'start pause resume pause',
        // ^ onEnter, onLeave, onEnterBack, onLeaveBack
        markers: true,
      },
      x: 400,
      rotation: 360,
      duration: 3,
    });
  }

  goForward() {
    const box: Element = this.box.nativeElement;
    this.rotate = 180;
    this.tl.to(box, 1, { left: '300px', rotation: 180 });
  }

  setToDefault() {
    const box: Element = this.box.nativeElement;
    this.rotate = 0;
    this.tl.to(box, 1, { left: '0', rotation: 0 });
  }

  tilt() {
    const box: Element = this.box.nativeElement;
    this.rotate += 30;
    this.tl.to(box, 0.5, { rotation: this.rotate });
  }

  shake() {
    const box: Element = this.box.nativeElement;
    this.tl
      .to(box, 0.2, { rotation: this.rotate + 15 })
      .to(box, 0.2, { rotation: this.rotate - 15 })
      .to(box, 0.2, { rotation: this.rotate + 7 })
      .to(box, 0.2, { rotation: this.rotate - 7 })
      .to(box, 0.2, { rotation: this.rotate });
  }

  tween(): void {
    console.log(this.box);
    console.log(this.btnContainers);
    const box: Element = this.box.nativeElement;
    const btnArr: Element[] = this.btnContainers.map(
      (btn) => btn.nativeElement
    );
    this.tl.to(btnArr, 0.5, { opacity: 1 });
    this.tl.to(box, 1, { opacity: 1 });
  }
}

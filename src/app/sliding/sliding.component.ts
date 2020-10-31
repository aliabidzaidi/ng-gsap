import { Component, OnInit } from '@angular/core';
import { TimelineLite, gsap } from 'gsap';

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.component.html',
  styleUrls: ['./sliding.component.scss'],
})
export class SlidingComponent implements OnInit {
  timeLine: TimelineLite = new TimelineLite();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap
      .timeline()
      .from('#content_1', { duration: 1, opacity: 0 })
      .from('#c_header', { opacity: 0, scale: 0.5, ease: 'back' })
      .from('#svg_Div svg', {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duaration: 0.8,
        ease: 'back',
      })
      .from('#remarks', { opacity: 0, xPercent: 20, ease: 'back',});
  }
}

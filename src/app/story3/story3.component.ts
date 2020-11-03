import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-story3',
  templateUrl: './story3.component.html',
  styleUrls: ['./story3.component.scss'],
})
export class Story3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(MotionPathPlugin);
  }

  ngAfterViewInit(): void {
    this.loadStory();
  }

  loadStory() {
    gsap.to('#logo', 4 ,{
      motionPath: {
        path: [{x:14, y:15}, {x:0, y:30}, {x:-15, y:14}, {x:0, y:0}],
        type: 'bezier',
      },
      repeat:-1,
      ease: 'Linear.easeInOut',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Splitting from 'splitting';

@Component({
  selector: 'app-story3',
  templateUrl: './story4.component.html',
  styleUrls: ['./story4.component.scss'],
})
export class Story4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    Splitting();
    // ScrollTrigger.create({
    //   trigger: '.story',
    //   start: 'top 10%',
    //   end: '+=4000s bottom',
    //   pin: '.story',
    //   markers: true,
    //   pinSpacing: false,
    // });
    this.loadStory();
  }

  loadStory() {
    let words = document.querySelectorAll('.word');

    // blurbOne.forEach((element, index) => {
    //   gsap.to(element, {
    //     scrollTrigger: {
    //       trigger: '.story',
    //       scrub: true,
    //       start: () => blurbOneBuffer + index * 100,
    //       end: () => blurbOneBuffer + index * 100 + 100,
    //       markers: true,
    //     },
    //     opacity: 1,
    //   });
    // });

    /*  SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: '.scrollElement',
      start: 'top top',
      end: '45% 100%',
      scrub: 3,
    });

    let padding = 1;

    words.forEach((element, index) => {
      console.log(element);
      padding = padding + padding;

      element.childNodes.forEach((child, childIndex) => {
        scene1.from(child, {
          // scrollTrigger:{
          //   scrub:true,
          //   markers: true,
          // },
          opacity: 0,
        });
      });
    });
    // scene1.to('');

    gsap.fromTo(
      '.arrow',
      { opacity: 1 },
      {
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.scrollElement',
          start: 'top top',
          end: '+=400',
          scrub: 1,
        },
        opacity: 0,
      }
    );
  }
}

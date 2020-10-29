import {
  Component,
  OnInit,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TimelineMax, TimelineLite, TweenLite, Back, Power1, gsap } from 'gsap';
import { Subscription, fromEvent } from 'rxjs';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-paperplane',
  templateUrl: './paperplane.component.html',
  styleUrls: ['./paperplane.component.scss'],
})
export class PaperplaneComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.head', {
      scrollTrigger: {
        pin: '.head',
        end: '+=5000s',
        pinSpacing: true,
      },
    });
    this.setScrollText();
    this.setScrollImages();
  }

  setScrollText(){
    
    gsap.to('#heading1', {
      scrollTrigger: {
        trigger: '#heading1',
        toggleActions: 'play reverse play reverse',
        start: '0s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    gsap.to('#heading2', {
      scrollTrigger: {
        trigger: '#heading2',
        toggleActions: 'play reverse play reverse',
        start: '+=1000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    gsap.to('#heading3', {
      scrollTrigger: {
        trigger: '#heading3',
        toggleActions: 'play reverse play reverse',
        start: '+=2000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    gsap.to('#heading4', {
      scrollTrigger: {
        trigger: '#heading4',
        toggleActions: 'play reverse play reverse',
        start: '+=3000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    
    gsap.to('#heading5', {
      scrollTrigger: {
        trigger: '#heading5',
        toggleActions: 'play reverse play reverse',
        start: '+=4000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

  }

  setScrollImages() {

    gsap.to('#img1', {
      scrollTrigger: {
        trigger: '#img1',
        toggleActions: 'play reverse play reverse',
        start: '0s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    gsap.to('#img2', {
      scrollTrigger: {
        trigger: '#img2',
        toggleActions: 'play reverse play reverse',
        start: '+=1000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    gsap.to('#img3', {
      scrollTrigger: {
        trigger: '#img3',
        toggleActions: 'play reverse play reverse',
        start: '+=2000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    gsap.to('#img4', {
      scrollTrigger: {
        trigger: '#img4',
        toggleActions: 'play reverse play reverse',
        start: '+=3000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    
    gsap.to('#img5', {
      scrollTrigger: {
        trigger: '#img5',
        toggleActions: 'play reverse play reverse',
        start: '+=4000s',
        end: '+=1000s',
      },
      opacity: 1,
    });

    // gsap.to('#imageContainer', {
    //   scrollTrigger: {
    //     trigger: '#imageContainer',
    //     start: 'top 20%',
    //     end: '+=200s',
    //     toggleActions: 'resume pause resume pause',
    //     markers: true,
    //     pin: true,
    //   },
    // });

    // gsap.to('#img1', {
    //   opacity: 1,
    // });
  }
}

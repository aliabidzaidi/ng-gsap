import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.scss'],
})
export class Story2Component implements OnInit {
  dialogues = [
    "It's getting cold",
    "Why don't you grab a sweater",
    'Get Comfy and Cozy',
    '⛄❄',
  ];

  animation = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.addAllDialogues();
  }

  ngAfterViewInit(): void {
    this.loadStory();
  }

  addAllDialogues() {
    let dialogueDiv = document.getElementById('dialogues');
    console.log(dialogueDiv);
    this.dialogues.forEach((element) => {
      let h1 = document.createElement('h1');
      h1.innerHTML = element;
      h1.style.position = 'absolute';
      h1.style.fontSize = '6em';
      dialogueDiv.appendChild(h1);
    });
  }

  loadStory() {
    let dialogues = document.querySelectorAll('#dialogues h1');
    dialogues.forEach((element) => {
      this.animation.fromTo(
        element,
        { opacity: 0, scale: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          repeat: 1,
          yoyo: true,
          yoyoEase: true,
          repeatDelay: 1.5,
        }
      );
    });
    gsap.set('#dialogues', { visibility: 'visible' });
  }
}

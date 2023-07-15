import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor() { }

  title = 'greensock';

  @ViewChild('box', { static: true })
  box!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    gsap.registerEffect({
      name: "fade",
      effect: (targets: any, config: any) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0 });
      },
      defaults: { duration: 8 },
      extendTimeline: true,
    });

    gsap.to('.subtitle', { opacity: 0, duration: 12, repeat: 1, yoyo: true });
    //gsap.to('.picture', { opacity: 1, duration: 4.5, repeat: 0, yoyo: true });

    gsap.from(".box", { duration: 5, opacity: 0, ease: "slow(2, 1.5, true)", y: -400 });
    //gsap.effects['fade']("");

    gsap.from(".picture", { opacity: 0, duration: 7, ease: "ease(1, 1.5, true)", y: 450, x: 500}); 

  }
}

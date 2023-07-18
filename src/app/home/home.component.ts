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

    gsap.from('.subtitle', { opacity: 1, repeat: 0 });
    gsap.to('.subtitle', { opacity: 0, duration: 5, repeat: 0, yoyo: true });
    //gsap.to('.picture', { opacity: 1, duration: 4.5, repeat: 0, yoyo: true });


    gsap.from(".box", { duration: 1, opacity: 0, ease: "slow(2, 1.5, true)", y: -150 });
    //gsap.effects['fade']("");

    gsap.from(".picture", { opacity: 0, duration: 5, ease: "ease(1, 1.5, true)", y: -380}); 

  }
}

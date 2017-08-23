import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
    animations: [
  trigger('app-presentation', [
   state('in', style({transform: 'translateX(0)'})),
   
  transition('* => void', [ animate(100, style({transform: 'translateX(100%)'}))
   
  ]),
  transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
]
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
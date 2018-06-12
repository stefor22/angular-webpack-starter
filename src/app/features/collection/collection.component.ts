import { Component, OnDestroy, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'tamu-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  animations: [
    trigger('show2hidden', [
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 0.7, offset: 0.7}),
          style({opacity: 1, offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, offset: 0}),
          style({opacity: 0.8, offset: 0.5}),
          style({opacity: 0, offset: 1.0})
        ]))
      ])
    ]),
  ]
})

export class CollectionComponent implements OnDestroy, OnInit {

  public showRoom: boolean = false;
  public showStyle: boolean = false;

  constructor(
  ) {
  }

  ngOnInit() {

  }

  back() {
    window.history.back();
  }
  toggleRoom(e) {
    this.showRoom = !this.showRoom;
    this.prevent(e);
  }
  toggleStyle(e) {
    this.showStyle = !this.showStyle;
    this.prevent(e);
  }

  ngOnDestroy() {
  }
  prevent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  byPropagation() {
    this.showRoom = false;
    this.showStyle = false;
  }
}

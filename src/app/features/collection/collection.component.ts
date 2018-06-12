import { Component, OnDestroy, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {collectionIds} from '../ids.data';
import {PhoneDataService} from '../../services/data.service';


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
  private collectionList = [];
  public page = 1;

  constructor(
    private dataService: PhoneDataService,
  ) {
  }

  ngOnInit() {

    this.getCollectionByIdList(collectionIds);
  }

  getCollectionByIdList(list) {
    let p = this.page;
    list.slice((p - 1) * 6, p * 6).forEach(id => {
      this.dataService.getCollectionById(id).then(res => {
        if (res.status.error === 0) {
          let c = res.result.collectionProducts.find(cp => cp.objName === 'fbottom');
          res.result.fbottomCode = c ? c.product.code : '';
          this.collectionList.push(res.result);
        }
      })
    });
  }

  onScroll() {
    if (collectionIds.length < (this.page + 1) * 6) return;
    this.page++;
    this.getCollectionByIdList(collectionIds);
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

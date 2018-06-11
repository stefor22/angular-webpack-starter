import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

import {
  SwiperConfigInterface,
  SwiperCoverflowEffectInterface,
  SwiperComponent,
  SwiperNavigationInterface
} from 'ngx-swiper-wrapper';

// 3D 切换效果参数设置
const coverflowEffectConfig: SwiperCoverflowEffectInterface = {
  rotate: 0,
  stretch: 200,
  depth: 200,
  modifier: 1,
  slideShadows: false
};
// 前进后退按钮配置
const navigationConfig: SwiperNavigationInterface = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  hideOnClick: true
  // disabledClass?: string;
  // hiddenClass?: string;
};

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./home.component.scss']
})

export class DashboardComponent implements OnDestroy, OnInit {
  config: SwiperConfigInterface;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.config = {
      direction: 'horizontal',
      // 开启鼠标的抓手状态
      grabCursor: false,
      // 被选中的滑块居中，默认居左
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      // loopedSlides: 8,
      autoplay: true,
      speed: 2000,
      // 切换效果为 coverflow
      // effect: 'coverflow',
      // coverflow 配置
      coverflowEffect: coverflowEffectConfig,
      // 前进后退按钮设置
      // navigation: navigationConfig,
      pagination: {
        el: '.swiper-pagination',
      },
    };
  }

  ngOnDestroy() {
  }
}

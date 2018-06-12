import { Component, OnDestroy, OnInit } from '@angular/core';

import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

import {
  SwiperConfigInterface,
  SwiperCoverflowEffectInterface,
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

@Component({
  selector: 'tamu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnDestroy, OnInit {
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

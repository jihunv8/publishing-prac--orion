import bannerImage1 from '../../../images/main-banner/cover_img01.jpg';
import bannerImage2 from '../../../images/main-banner/cover_img02.jpg';
import bannerImage3 from '../../../images/main-banner/cover_img03.jpg';
import bannerImage4 from '../../../images/main-banner/cover_img04.jpg';

import thumbImage1 from '../../../images/main-banner/cover_thumb01.jpg';
import thumbImage2 from '../../../images/main-banner/cover_thumb02.jpg';
import thumbImage3 from '../../../images/main-banner/cover_thumb03.jpg';
import thumbImage4 from '../../../images/main-banner/cover_thumb04.jpg';

import type { BannerItem } from './banner-container/BannerContainer.d';
import type { BannerNavItem } from './banner-nav/BannerNav.d';

export const bannerItems: BannerItem[] = [
  { content: '맛있고 품질 좋은 제품을\n합리적인 가격으로 공급합니다.', imageUrl: bannerImage1, textColor: '#fff' },
  { content: "제주 청정 수자원인\n용암해주로 만든\n'닥터유 제주용암수'", imageUrl: bannerImage2 },
  { content: "더 건강하게 더 맛있게\n원물 그대로 담은 자연한끼\n'마켓오네이처'", imageUrl: bannerImage3 },
  {
    content: '진단키트 사업을 시작으로 백신, 신약 발굴 및 개발까지\n제약/바이오 Platform 기업을 추구합니다.',
    imageUrl: bannerImage4,
    textColor: '#fff',
  },
];

export const bannerNavItems: BannerNavItem[] = [
  { title: '제과', thumbUrl: thumbImage1 },
  { title: '음료', thumbUrl: thumbImage2 },
  { title: '간편대용식', thumbUrl: thumbImage3 },
  { title: '바이오', thumbUrl: thumbImage4 },
];

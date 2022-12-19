import { useState } from 'react';
import styled, { css } from 'styled-components';

import bannerImage1 from '../../images/main-banner/cover_img01.jpg';
import bannerImage2 from '../../images/main-banner/cover_img02.jpg';
import bannerImage3 from '../../images/main-banner/cover_img03.jpg';
import bannerImage4 from '../../images/main-banner/cover_img04.jpg';

import thumbImage1 from '../../images/main-banner/cover_thumb01.jpg';
import thumbImage2 from '../../images/main-banner/cover_thumb02.jpg';
import thumbImage3 from '../../images/main-banner/cover_thumb03.jpg';
import thumbImage4 from '../../images/main-banner/cover_thumb04.jpg';

const bannerImageUrls: string[] = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];
type BannerItem = {
  content: string;
  imageUrl: string;
};

const bannerData: BannerItem[] = [
  { content: '맛있고 품질 좋은 제품을\n합리적인 가격으로 공급합니다.', imageUrl: bannerImage1 },
  { content: "제주 청정 수자원인\n용암해주로 만든\n'닥터유 제주용암수'", imageUrl: bannerImage2 },
  { content: "더 건강하게 더 맛있게\n원물 그대로 담은 자연한끼\n'마켓오네이처'", imageUrl: bannerImage3 },
  {
    content: '진단키트 사업을 시작으로 백신, 신약 발굴 및 개발까지\n제약/바이오 Platform 기업을 추구합니다.',
    imageUrl: bannerImage4,
  },
];

type BannerNavItem = {
  title: string;
  thumbUrl: string;
};

const bannerNavData: BannerNavItem[] = [
  { title: '제과', thumbUrl: thumbImage1 },
  { title: '음료', thumbUrl: thumbImage2 },
  { title: '간편대용식', thumbUrl: thumbImage3 },
  { title: '바이오', thumbUrl: thumbImage4 },
];

const MainBanner = (): JSX.Element => {
  const [bannerIndex, setBannerIndex] = useState(0);

  return (
    <MainBannerWrapper>
      <BannerContainer>
        {bannerData.map((banner, i) => {
          return (
            <Banner imageUrl={banner.imageUrl} isVisible={bannerIndex === i}>
              <BannerTitle>{banner.content}</BannerTitle>
            </Banner>
          );
        })}
      </BannerContainer>

      <BannerNav>
        {bannerNavData.map((data, i) => {
          return (
            <BannerNavItem thumbUrl={data.thumbUrl} isActive={bannerIndex === i}>
              <button
                onClick={() => {
                  setBannerIndex(i);
                }}
              >
                <h3>{data.title}</h3>
              </button>
            </BannerNavItem>
          );
        })}
      </BannerNav>
    </MainBannerWrapper>
  );
};

export default MainBanner;

const MainBannerWrapper = styled.div`
  position: relative;
`;

const BannerContainer = styled.div`
  height: 870px;
  position: relative;
`;

type BannerProps = {
  imageUrl: string;
  isVisible: boolean;
};

const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 100%;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat center;
  position: absolute;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.75s ease;
`;

const BannerTitle = styled.h2`
  width: 1200px;
  padding-top: 190px;
  margin: 0 auto;
  font-size: 5.2rem;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
`;

const BannerNav = styled.ul`
  margin: -90px auto 0;
  max-width: 1200px;
  display: flex;
  position: relative;
`;

type BannerNavItemProps = {
  thumbUrl: string;
  isActive: boolean;
};

const BannerNavItem = styled.li<BannerNavItemProps>`
  width: 25%;
  height: 180px;
  background: url(${({ thumbUrl }) => thumbUrl}) no-repeat center;
  :not(:first-child) {
    margin-left: 18px;
  }

  > button {
    width: 100%;
    height: 100%;
    border: none;
    padding: 12px;
    background: transparent;
    position: relative;
    overflow: hidden;

    ::before {
      content: '';
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 7.92%, rgba(0, 0, 0, 0) 91.09%);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.35s 0s ease-in-out;
    }
    :hover::before {
      transform: translateY(-100%);
    }

    ::after {
      content: '';
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: translateY(100%);
      transition: all 0.35s 0s ease-in-out;
      ${({ isActive }) => isActive && 'transform: translateY(0)'};
    }

    :hover::after {
      transform: translateY(0);
    }

    > h3 {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      color: #fff;
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 1.6;
      position: relative;
      z-index: 10;

      ${({ isActive }) =>
        isActive &&
        css`
          font-size: 4.4rem;
          font-weight: 800;
          align-items: center;
        `}
    }

    :hover > h3 {
      font-size: 4.4rem;
      font-weight: 800;
      align-items: center;
    }
  }
`;

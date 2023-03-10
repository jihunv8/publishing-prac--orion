import styled from 'styled-components';
import { mediaSmall, mediaXLarge, mediaXSmall } from '../../../../styles/mediaSize';

import type {
  BannerContainerProps,
  BannerProps,
  BannerBackgroundImgeProps,
  BannerTitleProps,
} from './BannerContainer.d';

const BannerContainer = ({ bannerIndex, bannerItems }: BannerContainerProps) => {
  return (
    <BannerContainerWrapper>
      {bannerItems.map((item, i) => {
        return (
          <a key={i} href="">
            <Banner isVisible={bannerIndex === i}>
              <BannerTitle textColor={item.textColor}>{item.content}</BannerTitle>
              <BackgroundImage imageUrl={item.imageUrl} isVisible={bannerIndex === i} />
            </Banner>
          </a>
        );
      })}
    </BannerContainerWrapper>
  );
};

const BannerContainerWrapper = styled.div`
  height: 870px;
  position: relative;

  @media ${mediaXLarge} {
    height: 760px;
  }

  @media ${mediaSmall} {
    height: 566px;
  }
`;

const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.75s ease;
  overflow: hidden;
`;

const BackgroundImage = styled.div<BannerBackgroundImgeProps>`
  width: 100%;
  height: 100%;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat center/cover;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(1.08)')};
  transition: 7.5s ease;
`;

const BannerTitle = styled.h2<BannerTitleProps>`
  ${({ textColor }) => textColor !== undefined && `color: ${textColor}`};
  position: relative;
  max-width: 1200px;
  padding: 190px 16px 0;
  margin: 0 auto;
  font-size: 5.2rem;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.02em;
  white-space: pre-wrap;

  @media ${mediaXLarge} {
    padding-top: 166px;
    white-space: normal;
  }

  @media ${mediaSmall} {
    font-size: 3.2rem;
  }

  @media ${mediaXSmall} {
    padding-top: 130px;
  }
`;

export default BannerContainer;

import styled from 'styled-components';

import { BannerContainerProps, BannerProps, BannerTitleProps } from './BannerContainer.d';

const BannerContainer = ({ bannerIndex, bannerItems }: BannerContainerProps) => {
  return (
    <BannerContainerWrapper>
      {bannerItems.map((item, i) => {
        return (
          <Banner key={i} imageUrl={item.imageUrl} isVisible={bannerIndex === i}>
            <BannerTitle textColor={item.textColor}>{item.content}</BannerTitle>
          </Banner>
        );
      })}
    </BannerContainerWrapper>
  );
};

const BannerContainerWrapper = styled.div`
  height: 870px;
  position: relative;
`;

const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 100%;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat center/cover;
  position: absolute;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.75s ease;
`;

const BannerTitle = styled.h2<BannerTitleProps>`
  ${({ textColor }) => textColor !== undefined && `color: ${textColor}`};
  width: 1200px;
  padding-top: 190px;
  margin: 0 auto;
  font-size: 5.2rem;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
`;

export default BannerContainer;

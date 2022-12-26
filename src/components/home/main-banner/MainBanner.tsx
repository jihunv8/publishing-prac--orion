import { useEffect, useState } from 'react';
import styled from 'styled-components';

import BannerContainer from './banner-container/BannerContainer';
import BannerNav from './banner-nav/BannerNav';

import { bannerItems, bannerNavItems } from './bannerData';

const MainBanner = (): JSX.Element => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const autoBannerChangeTimer = setTimeout(() => {
      let nextBannerIndex = bannerIndex + 1;

      setBannerIndex(nextBannerIndex < 4 ? nextBannerIndex : 0);
    }, 10000);

    return () => {
      clearTimeout(autoBannerChangeTimer);
    };
  });

  return (
    <MainBannerWrapper>
      <BannerContainer bannerIndex={bannerIndex} bannerItems={bannerItems} />
      <BannerNav bannerNavItems={bannerNavItems} bannerIndex={bannerIndex} setBannerIndex={setBannerIndex} />
    </MainBannerWrapper>
  );
};

export default MainBanner;

const MainBannerWrapper = styled.div`
  position: relative;
`;

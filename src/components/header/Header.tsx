import styled from 'styled-components';
import { useIsScrollUp } from '../../hooks/scroll';
import { mediaSmall, mediaXLarge } from '../../styles/mediaSize';
import { useState } from 'react';

import GlobalNavM from './global-nav/global-nav-m/GlobalNavM';
import GlobalNav from './global-nav/GlobalNav';
import Util from './Util';

import logoImage from '../../images/logo.png';

const Header = () => {
  const [isGlobalNavMOn, setIsGlobalNavMOn] = useState(false);
  const isScrollUp = useIsScrollUp();

  return (
    <HeaderWrapper isScrollUp={isScrollUp}>
      <InnerWrapper>
        <LogoWrapper>
          <a href="/">
            <img src={logoImage} alt="ORION" />
          </a>
        </LogoWrapper>
        <GlobalNav />
        <GlobalNavM isOn={isGlobalNavMOn} />
        <Util setIsGlobalNavMOn={setIsGlobalNavMOn} />
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header<{ isScrollUp: boolean }>`
  width: 100%;
  height: 90px;
  background-color: #fff;
  border-bottom: solid 1px #e2e2e2;
  position: fixed;
  z-index: 1000;
  transform: translateY(${({ isScrollUp }) => (isScrollUp ? '0' : '-100%')});
  transition: 0.45s;

  @media ${mediaXLarge} {
    height: 78px;
  }

  @media screen and (max-width: 960px) {
    height: 66px;
  }

  @media ${mediaSmall} {
    height: 75px;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);

  @media ${mediaXLarge} {
    left: 20px;
  }
`;

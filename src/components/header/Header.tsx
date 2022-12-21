import styled from 'styled-components';
import { useIsScrollUp } from '../../hooks/scroll';

import logoImage from '../../images/logo.png';
import GlobalNav from './GlobalNav';
import Util from './Util';

const Header = () => {
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
        <Util />
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
  padding: 0 60px;
  position: fixed;
  z-index: 1000;
  transform: translateY(${({ isScrollUp }) => (isScrollUp ? '0' : '-100%')});
  transition: 0.45s;
`;

const InnerWrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

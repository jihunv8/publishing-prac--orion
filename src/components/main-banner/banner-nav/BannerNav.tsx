import styled, { css } from 'styled-components';
import { BannerNavItemProps, BannerNavProps, NavItemButtonProps } from './BannerNav.d';

const BannerNav = ({ bannerNavItems, bannerIndex, setBannerIndex }: BannerNavProps) => {
  return (
    <BannerNavWrapper>
      {bannerNavItems.map((item, i) => {
        return (
          <NavItem key={i} thumbUrl={item.thumbUrl}>
            <NavItemButton
              isActive={bannerIndex === i}
              onClick={() => {
                setBannerIndex(i);
              }}
            >
              <h3>{item.title}</h3>
            </NavItemButton>
          </NavItem>
        );
      })}
    </BannerNavWrapper>
  );
};

export default BannerNav;

const BannerNavWrapper = styled.ul`
  margin: -90px auto 0;
  max-width: 1200px;
  display: flex;
  position: relative;
`;

const NavItem = styled.li<BannerNavItemProps>`
  width: 25%;
  height: 180px;
  background: url(${({ thumbUrl }) => thumbUrl}) no-repeat center;
  :not(:first-child) {
    margin-left: 18px;
  }
`;

const NavItemButton = styled.button<NavItemButtonProps>`
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

  ${({ isActive }) =>
    isActive &&
    css`
      ::before {
        transform: translateY(-100%);
      }
    `};

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
    transition: font-size 0.175s ease-in-out;

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
`;

import styled from 'styled-components';
import { useState } from 'react';

import navMenus from './navMenus';
import { Menu, SuperMenu } from './navMenus.d';
import { mediaLarge, mediaXLarge } from '../../styles/mediaSize';

const GlobalNav = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  return (
    <nav>
      <NavMenuList>
        {navMenus.map(({ title, href, subMenu }, i) => {
          return (
            <li key={i} onMouseEnter={() => setSelectedMenuIndex(i)} onMouseLeave={() => setSelectedMenuIndex(-1)}>
              <RootMenu isSelected={selectedMenuIndex === i} href={href}>
                {title}
              </RootMenu>
              <DropDownBox isSelected={selectedMenuIndex === i}>
                <Depth1 subMenu={subMenu} />
              </DropDownBox>
            </li>
          );
        })}
      </NavMenuList>
    </nav>
  );
};

export default GlobalNav;

const NavMenuList = styled.ul`
  height: 100%;
  display: flex;

  > li {
    padding: 0 36px;
  }

  @media ${mediaXLarge} {
    > li {
      padding: 0 31.5px;
    }
  }

  @media ${mediaLarge} {
    > li {
      padding: 0 24px;
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const RootMenu = styled.a<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  position: relative;

  height: 100%;

  color: #222;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.6;

  &::after {
    content: '';
    width: ${({ isSelected }) => (isSelected ? '100%' : '0')};
    height: 3px;
    background-color: ${({ isSelected }) => (isSelected ? '#e3051b' : 'transparent')};
    position: absolute;
    bottom: -1px;
    transition-duration: 0.45s;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
    background-color: #e3051b;
  }

  @media ${mediaXLarge} {
    font-size: 1.575rem;
  }
`;

const DropDownBox = styled.div<{ isSelected: boolean }>`
  visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0')};
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: absolute;
  top: 90px;
  left: 0;
  transition: opacity 0.45s;
`;

const Depth1 = ({ subMenu }: { subMenu: SuperMenu[] }) => {
  return (
    <Depth1Wrapper>
      {subMenu.map(({ title, href, subMenu }, i) => {
        return (
          <li key={i}>
            <a href={href}>{title}</a>
            <Depth2 subMenu={subMenu} />
          </li>
        );
      })}
    </Depth1Wrapper>
  );
};

const Depth1Wrapper = styled.ul`
  display: flex;
  width: fit-content;
  padding: 40px 36px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  > li {
    &:not(:first-child) {
      margin-left: 80px;
    }

    > a {
      color: #222;
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;

const Depth2 = ({ subMenu }: { subMenu: Menu[] }) => {
  return (
    <Depth2Wrapper>
      {subMenu.map(({ title, href }, i) => {
        return (
          <li key={i}>
            <a href={href}>{title}</a>
          </li>
        );
      })}
    </Depth2Wrapper>
  );
};

const Depth2Wrapper = styled.ul`
  background-color: #fff;
  margin-top: 20px;

  > li {
    &:not(:first-child) {
      margin-top: 10px;
    }

    > a {
      display: block;
      width: fit-content;
      position: relative;

      color: #222;
      line-height: 1.4;

      transition: 0.45s;

      &:hover {
        color: #e3051b;

        &::after {
          width: 100%;
        }
      }

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background-color: #e3051b;
        position: relative;
        bottom: 0;
        left: 0;

        transition: 0.45s;
      }
    }
  }
`;

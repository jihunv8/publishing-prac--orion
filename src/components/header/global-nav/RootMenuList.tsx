import styled from 'styled-components';
import { useState } from 'react';
import { mediaLarge, mediaXLarge } from '../../../styles/mediaSize';

import navMenus from './navMenus';
import SuperMenuList from './SuperMenuList';

const RootMenuList = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);
  return (
    <RootMenuListWrapper>
      {navMenus.map(({ title, href, subMenu }, i) => {
        const isSelected = selectedMenuIndex === i;

        return (
          <ListItem key={i} onMouseEnter={() => setSelectedMenuIndex(i)} onMouseLeave={() => setSelectedMenuIndex(-1)}>
            <Anchor href={href} isSelected={isSelected}>
              {title}
            </Anchor>
            <DropDownBox isSelected={isSelected}>
              <SuperMenuList menus={subMenu} />
            </DropDownBox>
          </ListItem>
        );
      })}
    </RootMenuListWrapper>
  );
};

export default RootMenuList;

const RootMenuListWrapper = styled.ul`
  height: 100%;
  display: flex;
`;

const ListItem = styled.li`
  padding: 0 36px;

  @media ${mediaXLarge} {
    padding: 0 31.5px;
  }

  @media ${mediaLarge} {
    padding: 0 24px;
  }
`;

const Anchor = styled.a<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  top: 100%;
  left: 0;
  transition: opacity 0.45s;

  /*header의 border-bottom영역에서 ListItem의 MouseLeave이벤트 발생 방지용*/
  border-top: solid 1px #e2e2e2;
`;

import styled from 'styled-components';
import { useState } from 'react';
import MenuListM from './MenuListM';

import type { SuperMenu } from '../navMenus.d';

type SuperMenuListProps = {
  menus: SuperMenu[];
  isSelected: boolean;
};

const SuperMenuListM = ({ menus, isSelected = false }: SuperMenuListProps) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  const toggleSelectedMenuIndex = (i: number) => {
    if (selectedMenuIndex === i) {
      setSelectedMenuIndex(-1);
    } else {
      setSelectedMenuIndex(i);
    }
  };

  return (
    <SuperMenuListMWrapper isSelected={isSelected}>
      {menus.map(({ title, href, subMenu }, i) => {
        const isSelected = selectedMenuIndex === i;
        return (
          <ListItem key={i}>
            {subMenu.length !== 0 ? (
              <Button isSelected={isSelected} onClick={() => toggleSelectedMenuIndex(i)}>
                {title}
              </Button>
            ) : (
              <Anchor href={href}>{title}</Anchor>
            )}
            <MenuListM menus={subMenu} isSelected={isSelected} />
          </ListItem>
        );
      })}
    </SuperMenuListMWrapper>
  );
};

export default SuperMenuListM;

const SuperMenuListMWrapper = styled.ul<{ isSelected: boolean }>`
  width: calc(100% - 140px);
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  padding-left: 26px;
  padding-right: 14px;
  position: absolute;
  top: 66px;
  left: 140px;
`;

const ListItem = styled.li``;

const Button = styled.button<{ isSelected: boolean }>`
  width: 100%;
  height: 64px;
  background-color: transparent;
  border: none;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  color: #222;
  font-size: 1.4rem;

  &::before {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border-right: 2px solid #222;
    border-bottom: 2px solid #222;

    position: absolute;
    top: 50%;
    right: 8px;

    transform: translateY(-50%) rotate(${({ isSelected }) => (isSelected ? '225deg' : '45deg')});
  }
`;

const Anchor = styled.a`
  display: block;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  color: #222;
  font-size: 1.4rem;
`;

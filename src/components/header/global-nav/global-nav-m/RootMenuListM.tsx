import styled, { css } from 'styled-components';
import { useState } from 'react';
import { mediaLarge, mediaXLarge } from '../../../../styles/mediaSize';

import navMenus from '../navMenus';
import SuperMenuListM from './SuperMenuListM';

const RootMenuListM = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  return (
    <RootMenuListMWrapper>
      {navMenus.map(({ title, href, subMenu }, i) => {
        const isSelected = selectedMenuIndex === i;

        return (
          <ListItem key={i} onClick={() => setSelectedMenuIndex(i)}>
            <Button isSelected={isSelected}>{title}</Button>
            <SuperMenuListM menus={subMenu} isSelected={isSelected} />
          </ListItem>
        );
      })}
    </RootMenuListMWrapper>
  );
};

export default RootMenuListM;

const RootMenuListMWrapper = styled.ul`
  width: fit-content;
  height: 100%;
  background-color: #f9f9f9;
`;

const ListItem = styled.li``;

const Button = styled.button<{ isSelected: boolean }>`
  width: 140px;
  height: 64px;
  background-color: transparent;
  border: none;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #999;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1.6;

  transition: 0.15s;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #e3051b;
      color: #fff;
    `}
`;

import styled from 'styled-components';
import type { Menu } from './navMenus.d';

type MenuList = {
  menus: Menu[];
};

const MenuList = ({ menus }: MenuList) => {
  return (
    <MenuListWrapper>
      {menus.map(({ title, href }, i) => {
        return (
          <ListItem key={i}>
            <Anchor href={href}>{title}</Anchor>
          </ListItem>
        );
      })}
    </MenuListWrapper>
  );
};

export default MenuList;

const MenuListWrapper = styled.ul`
  background-color: #fff;
  margin-top: 20px;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Anchor = styled.a`
  display: block;
  width: fit-content;
  position: relative;

  color: #222;
  line-height: 1.4;

  transition: color 0.45s;

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
`;

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
          <li key={i}>
            <a href={href}>{title}</a>
          </li>
        );
      })}
    </MenuListWrapper>
  );
};

export default MenuList;

const MenuListWrapper = styled.ul`
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
    }
  }
`;

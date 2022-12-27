import styled from 'styled-components';
import type { Menu } from '../navMenus.d';

type MenuList = {
  menus: Menu[];
  isSelected: boolean;
};

const MenuListM = ({ menus, isSelected = false }: MenuList) => {
  return (
    <MenuListMWrapper isSelected={isSelected}>
      {menus.map(({ title, href }, i) => {
        return (
          <ListItem key={i}>
            <Anchor href={href}>{title}</Anchor>
          </ListItem>
        );
      })}
    </MenuListMWrapper>
  );
};

export default MenuListM;

const MenuListMWrapper = styled.ul<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 8px;
  }
`;

const Anchor = styled.a`
  display: block;
  width: fit-content;
  position: relative;

  color: #222;
  font-size: 1.4rem;
  line-height: 1.4;

  &:hover {
    color: #e3051b;
  }
`;

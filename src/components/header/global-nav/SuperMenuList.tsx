import styled from 'styled-components';
import MenuList from './MenuList';

import type { SuperMenu } from './navMenus.d';

type SuperMenuListProps = {
  menus: SuperMenu[];
};

const SuperMenuList = ({ menus }: SuperMenuListProps) => {
  return (
    <SuperMenuListWrapper>
      {menus.map(({ title, href, subMenu }, i) => {
        return (
          <li key={i}>
            <a href={href}>{title}</a>
            <MenuList menus={subMenu} />
          </li>
        );
      })}
    </SuperMenuListWrapper>
  );
};

export default SuperMenuList;

const SuperMenuListWrapper = styled.ul`
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

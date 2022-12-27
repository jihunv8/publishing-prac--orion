import styled from 'styled-components';
import RootMenuList from './RootMenuList';

const GlobalNav = () => {
  return (
    <GlobalNavWrapper>
      <RootMenuList />
    </GlobalNavWrapper>
  );
};

export default GlobalNav;

const GlobalNavWrapper = styled.nav`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

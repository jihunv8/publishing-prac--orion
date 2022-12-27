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

const GlobalNavWrapper = styled.nav``;

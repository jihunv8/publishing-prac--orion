import styled from 'styled-components';
import RootMenuList from './RootMenuListM';

type GlobalNavMProps = {
  isOn: boolean;
};

const GlobalNavM = ({ isOn = false }: GlobalNavMProps) => {
  return (
    <GlobalNavMWrapper isOn={isOn}>
      <RootMenuList />
    </GlobalNavMWrapper>
  );
};

export default GlobalNavM;

const GlobalNavMWrapper = styled.nav<{ isOn: boolean }>`
  display: none;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #fff;
  padding-top: 66px;
  z-index: -1;

  @media screen and (max-width: 960px) {
    display: ${({ isOn }) => (isOn ? 'block' : 'none')};
  }
`;

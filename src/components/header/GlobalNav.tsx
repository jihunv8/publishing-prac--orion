import styled from 'styled-components';

const GlobalNav = () => {
  return (
    <GlobalNavWarpper>
      <Depth1>
        <li>
          <a href="">회사소개</a>
        </li>
        <li>
          <a href="">사업분야</a>
        </li>
        <li>
          <a href="">윤리경영</a>
        </li>
        <li>
          <a href="">투자정보</a>
        </li>
        <li>
          <a href="">뉴스룸</a>
        </li>
        <li>
          <a href="">고객센터</a>
        </li>
      </Depth1>
    </GlobalNavWarpper>
  );
};

export default GlobalNav;

const GlobalNavWarpper = styled.nav``;

const Depth1 = styled.ul`
  height: 100%;
  display: flex;

  > li {
    padding: 0 36px;

    > a {
      display: flex;
      align-items: center;
      position: relative;

      height: 100%;

      color: #222;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.6;

      &::after {
        content: '';
        width: 0;
        height: 3px;
        background-color: transparent;
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
    }
  }
`;

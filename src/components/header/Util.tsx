import styled from 'styled-components';

const Util = () => {
  return (
    <UtilWrapper>
      <EnglishLink href="/en">English</EnglishLink>
      <TempSearchBtn />
      <TempHamburgerBtn />
    </UtilWrapper>
  );
};

export default Util;

const UtilWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
`;

const EnglishLink = styled.a`
  margin-right: 32px;
  color: #222;
  font-size: 1.4rem;
  font-weight: 700;
  transition-duration: 0.45s;

  &:hover {
    color: #e3051b;
  }
`;

const TempSearchBtn = styled.button`
  width: 26px;
  height: 26px;
  margin-right: 16px;
  border: solid 1px #000;
`;

const TempHamburgerBtn = styled.button`
  width: 30px;
  height: 30px;
  border: solid 1px #000;
`;

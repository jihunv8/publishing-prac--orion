import styled from 'styled-components';

import iconSearch from '../../images/header/icon-search.png';

const Util = () => {
  return (
    <UtilWrapper>
      <EnglishLink href="/en">English</EnglishLink>
      <SearchBtn />
      <HamburgerBtn>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerBtn>
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

const SearchBtn = styled.button`
  width: 26px;
  height: 26px;
  margin-right: 16px;
  border: none;
  background: url(${iconSearch}) no-repeat center / 24px;
`;

const HamburgerBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #222;

    &:first-chi ld {
      margin-top: 3px;
    }

    &:nth-child(2) {
      margin-top: 8px;
    }

    &:last-child {
      margin-top: 8px;
      width: 30px;
    }
  }
`;

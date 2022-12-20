import styled from 'styled-components';

import logo from '../../images/footer/f_logo.png';

import Address from './Address';
import FamilySite from './FamilySite';
import FooterNav from './FooterNav';
import FooterSubNav from './FooterSubNav';
import SNSButtonContainer from './SNSButtonContainer';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentsArea>
        <Logo>
          <img src={logo} alt="orion logo" />
        </Logo>
        <FooterNav />
        <FooterSubNav />
        <Address />
        <Line />
        <Copyright>COPYRIGHT ORION CORP. ALL RIGHT RESERVED.</Copyright>
        <SNSButtonContainer />
        <FamilySite />
      </ContentsArea>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #222;
`;

const ContentsArea = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  padding: 80px 16px 50px;
  display: grid;
  grid-template:
    'logo footer-nav footer-nav'
    'address footer-sub-nav footer-sub-nav'
    'line line line'
    'copyright sns-btns family-site'
    / 1fr 1fr auto;
`;

const Logo = styled.div`
  grid-area: logo;
`;

const Line = styled.div`
  grid-area: line;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 1px;
  background-color: #444;
`;

const Copyright = styled.p`
  grid-area: 'copyright';
  color: #777;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6;
`;

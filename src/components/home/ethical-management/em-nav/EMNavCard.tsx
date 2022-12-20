import styled from 'styled-components';

export type EMNavCardProps = {
  title: string;
  content: string;
  imageUrl: string;
  hoverColor: string;
};

const EMNavCard = ({ title, content, imageUrl, hoverColor }: EMNavCardProps): JSX.Element => {
  return (
    <EMNavCardWrapper imageUrl={imageUrl}>
      <InnerWrapper href="" hoverColor={hoverColor}>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </InnerWrapper>
    </EMNavCardWrapper>
  );
};

export default EMNavCard;

const EMNavCardWrapper = styled.li<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat center/cover;
`;

const Content = styled.p`
  margin-top: 0.8rem;
  color: #fff;
  font-size: 2rem;
  opacity: 0;
  position: relative;
  transform: translateY(50px);
  transition: 0.35s ease-in-out;
`;

const InnerWrapper = styled.a<{ hoverColor: string }>`
  display: block;
  width: 100%;
  height: 100%;
  padding: 40px;
  position: relative;
  transition: background-color 0.35s ease-in-out;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};

    > ${Content} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h3`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 1.2;
`;

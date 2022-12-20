import styled from 'styled-components';

export type ListCardProps = {
  content: string;
  imageUrl: string;
};

const ListCard = ({ content, imageUrl }: ListCardProps): JSX.Element => {
  return (
    <ListCardWrapper imageUrl={imageUrl}>
      <InnerWrapper href="">
        <Content>{content}</Content>
      </InnerWrapper>
    </ListCardWrapper>
  );
};

export default ListCard;

const ListCardWrapper = styled.li<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background: #000 url(${({ imageUrl }) => imageUrl}) no-repeat center/contain;
`;

const Content = styled.p`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: rgba(227, 5, 27, 0.6);

  color: #fff;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  word-break: keep-all;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(100%);
  transition: 0.35s ease-in-out;
`;

const InnerWrapper = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    > ${Content} {
      transform: translateY(0);
    }
  }
`;

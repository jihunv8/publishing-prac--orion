import { useEffect } from 'react';
import styled from 'styled-components';
import CategorySelector from './CategorySelector';
import NewsRoomList from './list/NewsRoomList';

const NewsRoom = (): JSX.Element => {
  useEffect(() => {
    fetch('/newsroom')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <NewsRoomWrapper>
      <ContentsArea>
        <Title>뉴스룸</Title>
        <CategorySelector />
        <NewsRoomList />
      </ContentsArea>
    </NewsRoomWrapper>
  );
};

export default NewsRoom;

const NewsRoomWrapper = styled.section`
  margin-top: 160px;
  margin-bottom: 180px;
`;

const ContentsArea = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 4.4rem;
  font-weight: 800;
  line-height: 1.4;
`;

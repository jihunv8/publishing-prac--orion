import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategorySelector from './CategorySelector';
import NewsRoomList from './list/NewsRoomList';

import type { NewsRoomItem } from './list/NewsRoomList';
import type { CategoryType } from './CategorySelector';

const NewsRoom = (): JSX.Element => {
  const [data, setData] = useState<NewsRoomItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');

  const filterData = (): NewsRoomItem[] => {
    if (selectedCategory === 'all') {
      return data.slice(0, 8);
    } else {
      return data.filter((item) => {
        return item.category === selectedCategory;
      });
    }
  };

  useEffect(() => {
    fetch('/newsroom')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  return (
    <NewsRoomWrapper>
      <ContentsArea>
        <Title>뉴스룸</Title>
        <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <NewsRoomList items={filterData()} />
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

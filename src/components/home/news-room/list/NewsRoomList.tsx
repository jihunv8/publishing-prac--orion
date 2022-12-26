import styled from 'styled-components';
import { mediaSmall } from '../../../../styles/mediaSize';
import ListCard from './ListCard';

export type NewsRoomItem = {
  category: 'instagram' | 'youtube' | 'news';
  imageUrl: string;
  content: string;
};

type NewRoomListProps = {
  items: NewsRoomItem[];
};

const NewsRoomList = ({ items = [] }: NewRoomListProps): JSX.Element => {
  return (
    <NewsRoomListWrapper>
      {items.map(({ content, imageUrl, category }, i) => {
        return <ListCard key={i} content={content} imageUrl={imageUrl} category={category} />;
      })}
    </NewsRoomListWrapper>
  );
};

export default NewsRoomList;

const NewsRoomListWrapper = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 1px;

  @media ${mediaSmall} {
    display: flex;
    overflow-x: scroll;
  }
`;

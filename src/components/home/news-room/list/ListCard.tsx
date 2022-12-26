import styled from 'styled-components';

import iconInstagram from '../../../../images/home/news-room/social_icon_instagram.png';
import iconYoutube from '../../../../images/home/news-room/social_icon_youtube.png';
import iconNews from '../../../../images/home/news-room/social_icon_news.png';
import { mediaMiddle, mediaSmall, mediaXLarge, mediaXSmall } from '../../../../styles/mediaSize';

const iconUrls = { instagram: iconInstagram, youtube: iconYoutube, news: iconNews };

export type ListCardProps = {
  content: string;
  imageUrl: string;
  category: 'instagram' | 'youtube' | 'news';
};

const ListCard = ({ content, imageUrl, category }: ListCardProps): JSX.Element => {
  return (
    <ListCardWrapper imageUrl={imageUrl} category={category}>
      <InnerWrapper href="">
        <Content>{content}</Content>
      </InnerWrapper>
    </ListCardWrapper>
  );
};

export default ListCard;

type ListCardWrapperProps = {
  imageUrl: string;
  category: 'instagram' | 'youtube' | 'news';
};

const ListCardWrapper = styled.li<ListCardWrapperProps>`
  width: 100%;
  background: #000 url(${({ imageUrl }) => imageUrl}) no-repeat center/contain;
  position: relative;
  aspect-ratio: 1/1;

  ::after {
    content: '';
    display: block;
    width: 36px;
    height: 36px;
    background: url(${({ category }) => iconUrls[category]}) no-repeat center / cover;
    position: absolute;
    right: 1.6rem;
    bottom: 1.6rem;
    z-index: 1;
  }

  @media ${mediaSmall} {
    height: 242px;
  }
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

  @media ${mediaXLarge} {
    font-size: 2.1rem;
  }

  @media ${mediaMiddle} {
    font-size: 1.6rem;
  }

  @media ${mediaXSmall} {
    font-size: 1.8rem;
  }
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

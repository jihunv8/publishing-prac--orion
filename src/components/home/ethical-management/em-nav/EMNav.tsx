import styled from 'styled-components';
import { mediaSmall } from '../../../../styles/mediaSize';
import EMNavCard from './EMNavCard';

import navCards from './EMNavData';

const EMNav = (): JSX.Element => {
  return (
    <EMNavWrapper>
      {navCards.map(({ title, content, imageUrl, imageMUrl, hoverColor }, i) => {
        return (
          <EMNavCard
            key={i}
            title={title}
            content={content}
            imageUrl={imageUrl}
            imageMUrl={imageMUrl}
            hoverColor={hoverColor}
          />
        );
      })}
    </EMNavWrapper>
  );
};

export default EMNav;

const EMNavWrapper = styled.ul`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 16px;

  @media ${mediaSmall} {
    grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  }
`;

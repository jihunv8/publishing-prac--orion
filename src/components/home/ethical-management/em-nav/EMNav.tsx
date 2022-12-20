import styled from 'styled-components';
import EMNavCard from './EMNavCard';

import navCards from './EMNavData';

const EMNav = (): JSX.Element => {
  return (
    <EMNavWrapper>
      {navCards.map(({ title, content, imageUrl, hoverColor }, i) => {
        return <EMNavCard key={i} title={title} content={content} imageUrl={imageUrl} hoverColor={hoverColor} />;
      })}
    </EMNavWrapper>
  );
};

export default EMNav;

const EMNavWrapper = styled.ul`
  width: 100%;
  height: 592px;
  margin-top: 50px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 16px;

  > li:last-child {
    grid-row: 1 / span 2;
    grid-column: 4;
  }
`;

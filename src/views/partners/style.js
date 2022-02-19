import styled from 'styled-components';
import { media } from '@styles';

export const PartnersSection = styled.section`
  position: relative;
  width: 100%;
  border-top: 3px solid var(--text);
  padding: 2vw 0;

  ${media.thone`padding: 6vw 0;`};
`;
export const PartnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 4vw;

  ${media.thone`
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 30vw;
    grid-gap: 2vw;
  `};
`;
export const PartnerButton = styled.div`
  background-color: var(--bright);
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vw;

  ${media.thone`
    :nth-child(-1n + 3) {
      grid-column: span 4;
    }
    :nth-last-child(2) {
      grid-row-start: 2;
      grid-column: 3 / span 4;
    }
    :nth-last-child(1) {
      grid-row-start: 2;
      grid-column: 7 / span 4;
    }
  `};
`;
export const SponsorImage = styled.img`
  width: 100%;
  filter: grayscale(100%);

  ${media.thone`width: 90%;`};
`;

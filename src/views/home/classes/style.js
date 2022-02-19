import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, SmallText } from '@styles';

export const ClassesSectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  margin-top: 10vw;

  ${media.thone`margin-top: 4rem;`};
`;
export const GridContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: stretch;
  align-items: start;
  grid-gap: 4vw 5vw;
`;
export const SmallDescriptionText = styled(SmallText)`
  max-width: 24vw;

  ${media.desktop`max-width: 38vw;`};
  ${media.tablet`max-width: 46vw;`};
  ${media.thone`max-width: 100%;`};
`;
export const ProjectLeft = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;

  ${media.tablet`
    grid-column-start: 1;
    grid-column-end: 11;
  `};
`;
export const ProjectRight = styled.div`
  grid-column-start: 6;
  grid-column-end: 11;

  ${media.tablet`
    grid-column-start: 1;
    grid-column-end: 11;
  `};
`;
export const ImageWrapper = styled(Link)`
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  transition: 1.2s all cubic-bezier(0, 0.28, 0.5, 1) !important;
  z-index: 2;

  img {
    transition: 1.2s all cubic-bezier(0, 0.28, 0.5, 1) !important;
  }

  :hover {
    img {
      transform: scale(1.1) !important;
    }
  }
`;
export const ProjectText = styled(SmallText)`
  margin: 1.75% 0 0 0;
`;

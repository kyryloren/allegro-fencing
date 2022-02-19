import styled from 'styled-components';
import { media, BigText, SmallText } from '@styles';

export const InfoSectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  margin: 10vw 0;

  ${media.thone`margin: 4rem 0;`};
`;
export const BigDescriptionText = styled(BigText)`
  text-indent: 11vw;
  margin: 60px 0;

  ${media.thone`margin: 30px 0;`};
`;
export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0 7vw;
`;
export const DescriptionText = styled(SmallText)`
  grid-column-start: 7;
  grid-column-end: 11;

  ${media.tablet`
    grid-column-start: 1;
    grid-column-end: 13;
  `};
`;

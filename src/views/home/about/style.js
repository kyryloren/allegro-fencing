import styled from 'styled-components';
import { media, HugeText, BigText, SmallText } from '@styles';

export const AboutSectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  margin-top: 10vw;

  ${media.thone`margin-top: 4rem;`};
`;
export const BigDescriptionText = styled(BigText)`
  text-indent: 11vw;
  margin: 60px 0;

  ${media.thone`margin: 30px 0;`};
`;
export const MarqueeWrapper = styled(HugeText)`
  padding: 32px 0;

  position: relative;
  overflow: hidden;
`;
export const MarqueeInner = styled.div`
  width: fit-content;
  display: flex;
  flex: auto;
  flex-direction: row;
`;
export const ClippedText = styled.div`
  flex-shrink: 0;
  padding: 0 4px;
  font-smooth: always;
`;
export const LongTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px 30px;
  justify-items: stretch;
  align-items: start;
  margin-top: 30px;

  ${media.tablet`
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 20px 30px;
    justify-content: stretch;
  `};
  ${media.thone`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px 15px;
  `};
`;
export const DescriptionText = styled(SmallText)`
  margin: 0;
`;
export const LeftTextCol = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;

  ${media.tablet`
    grid-column-end: 4;
  `};
`;
export const RightLeftCol = styled.div`
  grid-column-start: 7;
  grid-column-end: 10;

  ${media.tablet`
    grid-column-start: 4;
    grid-column-end: 10;
  `};
  ${media.thone`
    grid-column-start: 1;
    grid-column-end: 5;
  `};
`;
export const RightRightCol = styled.div`
  grid-column-start: 10;
  grid-column-end: 13;

  ${media.tablet`
    grid-column-start: 4;
    grid-column-end: 10;
  `};
  ${media.thone`
    grid-column-start: 1;
    grid-column-end: 5;
  `};
`;

import styled from 'styled-components';
import { media, HugeText, SmallText } from '@styles';

export const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100vw;
`;
export const LineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  ${media.thone`flex-direction: column;`};
`;
export const HideWrapper = styled.div`
  overflow: hidden;

  :nth-child(2),
  :nth-child(3) {
    margin-top: -2vw;
  }
`;
export const HeroTitle = styled(HugeText)`
  z-index: 4;
  position: relative;

  span {
    display: inline-block;
  }
`;
export const TextWrapper = styled.div`
  max-width: 15rem;
  position: absolute;
  top: 0;
  right: 5.1vw;

  ${media.tablet`
    top: -5rem;
  `};
  ${media.phone`right: -1vw;`};
`;
export const LabelText = styled.p`
  font-size: 16px;
  line-height: 16px;

  :last-child {
    ${media.thone`display: none;`};
  }

  ${media.phone`
    font-size: 14px;
    line-height: 14px;
  `};
`;
export const DescriptionText = styled(SmallText)`
  max-width: 23vw;
  margin: 5vw 0 0 18vw;

  ${media.tablet`
    margin: 5vw 0 0 0;
  `};
  ${media.thone`
    max-width: 100%;
  `};
`;
export const ImageWrap = styled.div`
  position: relative;
  float: right;
  width: 42vw;
  height: 80vh;
  margin-top: -11vw;
  z-index: 2;
  overflow: hidden;

  div {
    position: absolute;
    inset: -5%;

    ${media.thone`inset: 0;`};
  }

  ${media.tablet`width: 60vw;`};
  ${media.thone`
    width: 100%;
    float: left;
    margin-top: 2rem;
    height: 40vh;
  `};
`;
export const ImageOverlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 105%;
  height: 105%;
  background: var(--background);
`;

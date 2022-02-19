import styled from 'styled-components';
import media from './media';

export const HugeText = styled.h1`
  font-family: var(--font-family);
  color: var(--text);
  font-weight: 400;
  font-size: 9.375vw;
  line-height: 10.2vw;
  margin: 0;

  ${media.tablet`
    font-size: 11vw;
    line-height: 12vw;
  `};
  ${media.thone`
    font-size: 45px;
    line-height: 55px;
  `};
  ${media.phone`
    font-size: 32px;
    line-height: 40px;
  `};
`;
export const BigText = styled.h2`
  font-family: var(--font-family);
  color: var(--text);
  font-weight: 400;
  font-size: 3.35vw;
  line-height: 1.15;
  margin: 0;

  ${media.tablet`
    font-size: 3.75vw;
    line-height: 1.2;
  `};
  ${media.thone`font-size: 7.8vw;`};
`;
export const SmallText = styled.p`
  font-size: 1.25vw;
  line-height: 1.5625vw;

  ${media.desktop`
    font-size: 2vw;
    line-height: 1.2;
  `};
  ${media.tablet`
    font-size: 2.4vw;
    line-height: 1.3;
  `};
  ${media.thone`
    font-size: 22px;
    line-height: 1.275;
  `};
  ${media.phone`
    font-size: 18px;
    line-height: 24px;
  `};
`;

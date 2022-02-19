import styled from 'styled-components';
import { media } from '@styles';

export const CTASection = styled.section`
  position: relative;
  width: 100%;
  border-top: 3px solid var(--text);
  border-bottom: 3px solid var(--text);
  padding: 8vw 0 2vw 0;

  ${media.thone`padding: 15vw 0 6vw 0;`};
`;
export const StyledImage = styled.img`
  width: 0;
  display: inline-block;
  margin-bottom: -0.3vw;
  transition: 0.5s all cubic-bezier(0.19, 1, 0.22, 1) !important;
`;
export const LinkWrapper = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 0.5s all cubic-bezier(0.19, 1, 0.22, 1) !important;

  :hover {
    img {
      width: 7vw;
      margin-left: 1vw;
      transition: 0.5s all cubic-bezier(0.19, 1, 0.22, 1) !important;
    }
  }
`;

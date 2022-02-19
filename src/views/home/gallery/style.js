import styled from 'styled-components';
import { media, HugeText } from '@styles';

export const GalleryWrapper = styled.section`
  position: relative;
  width: 100%;
  margin-top: 10vw;
  min-height: 100vh;
`;
export const ImageOne = styled.div`
  position: absolute;
  left: 10%;
  width: 30vw;

  ${media.thone`width: 60vw;`};
`;
export const ImageTwo = styled.div`
  position: absolute;
  right: 10%;
  width: 20vw;

  ${media.thone`width: 60vw;`};
`;
export const ImageThree = styled.div`
  position: absolute;
  left: 6%;
  width: 16vw;

  ${media.thone`width: 50vw;`};
`;
export const MiddleImage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  z-index: 2;

  .gatsby-image-wrapper {
    height: 100%;
  }

  ${media.thone`width: 60vw;`};
`;
export const TextWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
export const HugeMiddleText = styled(HugeText)`
  white-space: nowrap;
  z-index: 3;
`;
export const ImageFour = styled.div`
  position: absolute;
  right: 6%;
  width: 16vw;

  ${media.thone`width: 50vw;`};
`;
export const ImageFive = styled.div`
  position: absolute;
  left: 8%;
  width: 30vw;

  ${media.thone`width: 50vw;`};
`;
export const ImageSix = styled.div`
  position: absolute;
  right: 5.1%;
  width: 34vw;

  ${media.thone`width: 60vw;`};
`;

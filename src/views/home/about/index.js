import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useWindowSize } from '@hooks';
import { Container } from '@styles';
import {
  AboutSectionWrapper,
  MarqueeWrapper,
  MarqueeInner,
  ClippedText,
  BigDescriptionText,
  LongTextWrapper,
  DescriptionText,
  LeftTextCol,
  RightLeftCol,
  RightRightCol,
} from './style';

const About = () => {
  let clippedText = useRef([]);
  let marqueeInner = useRef(null);
  const { width } = useWindowSize();

  useEffect(() => {
    let tween = gsap
      .to(clippedText.current, { xPercent: -100, repeat: -1, duration: 10, ease: 'linear' })
      .totalProgress(0.5);

    gsap.set(marqueeInner, { xPercent: -50 });
    if (window !== 'undefined') {
      window.scroll.on('scroll', func => {
        let isScrollingDown = func.direction === 'up' ? false : true;
        gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });
      });
    }
  }, [width]);

  return (
    <AboutSectionWrapper>
      <MarqueeWrapper>
        <MarqueeInner ref={el => (marqueeInner = el)}>
          <ClippedText ref={el => (clippedText.current[0] = el)}>
            En garde! Ready? Fence! -&nbsp;
          </ClippedText>
          <ClippedText ref={el => (clippedText.current[1] = el)}>
            En garde! Ready? Fence! -&nbsp;
          </ClippedText>
          <ClippedText ref={el => (clippedText.current[2] = el)}>
            En garde! Ready? Fence! -&nbsp;
          </ClippedText>
        </MarqueeInner>
      </MarqueeWrapper>
      <Container>
        <BigDescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </BigDescriptionText>
        <LongTextWrapper>
          <LeftTextCol>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </DescriptionText>
          </LeftTextCol>
          <RightLeftCol>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </DescriptionText>
          </RightLeftCol>
          <RightRightCol>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </DescriptionText>
          </RightRightCol>
        </LongTextWrapper>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;

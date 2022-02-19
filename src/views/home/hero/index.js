import React, { useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  HeroSectionWrapper,
  LineWrapper,
  HeroTitle,
  LabelText,
  DescriptionText,
  ImageWrap,
  TextWrapper,
  HideWrapper,
  ImageOverlay,
} from './style';
import { gsap, Power4 } from 'gsap';
import { Container } from '@styles';

const Hero = ({ data }) => {
  let titleText = useRef([]);
  let opacityAnim = useRef([]);
  let imageAnim = useRef([]);
  var tl = gsap.timeline();

  useEffect(() => {
    tl.from(titleText.current, {
      yPercent: 120,
      skewY: '7deg',
      ease: Power4.easeOut,
      duration: 1.3,
      stagger: 0.07,
      delay: 0.5,
    })
      .from(
        opacityAnim.current,
        {
          opacity: 0,
          ease: Power4.easeOut,
          duration: 1.3,
          stagger: 0.4,
        },
        '-=1.5',
      )
      .to(imageAnim.current[0], { height: 0, ease: Power4.easeOut, duration: 1.3 }, '-=1.5')
      .from(imageAnim.current[1], { scale: 1.4, ease: Power4.easeOut, duration: 1.3 }, '-=1.5');
  }, [tl]);

  return (
    <HeroSectionWrapper>
      <Container>
        <HideWrapper>
          <HeroTitle>
            <span ref={el => (titleText.current[0] = el)}>Training</span>
            <span ref={el => (titleText.current[1] = el)}>&nbsp;the</span>
          </HeroTitle>
        </HideWrapper>
        <HideWrapper>
          <HeroTitle>
            <span ref={el => (titleText.current[2] = el)}>next</span>
            <span ref={el => (titleText.current[3] = el)}>&nbsp;generation</span>
          </HeroTitle>
        </HideWrapper>
        <HideWrapper>
          <HeroTitle>
            <span ref={el => (titleText.current[4] = el)}>of</span>
            <span ref={el => (titleText.current[5] = el)}>&nbsp;fencers</span>
          </HeroTitle>
        </HideWrapper>
        <TextWrapper ref={el => (opacityAnim.current[0] = el)}>
          <LabelText>A full-service fencing and sports center based in New York</LabelText>
          <LabelText>&copy; 2022 Allegro Fencing Center</LabelText>
        </TextWrapper>
        <LineWrapper>
          <DescriptionText ref={el => (opacityAnim.current[1] = el)}>
            With over 50 years of experience, Allegro Fencing coaching has trained Olympic
            champions, professional athletes, and young fencers alike.
          </DescriptionText>
          <ImageWrap>
            <ImageOverlay ref={el => (imageAnim.current[0] = el)} />
            <div data-scroll data-scroll-speed={-1} ref={el => (imageAnim.current[1] = el)}>
              <GatsbyImage
                image={data.image1.childImageSharp.gatsbyImageData}
                alt="Allegro Fencing Center"
              />
            </div>
          </ImageWrap>
        </LineWrapper>
      </Container>
    </HeroSectionWrapper>
  );
};

export default Hero;

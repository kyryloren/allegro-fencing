import React, { useEffect, useRef } from 'react';
import { Container } from '@styles';
import {
  GalleryWrapper,
  ImageOne,
  ImageTwo,
  ImageThree,
  MiddleImage,
  ImageFour,
  ImageFive,
  ImageSix,
  TextWrapper,
  HugeMiddleText,
} from './style';
import { GatsbyImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ data }) => {
  let sectionContainer = useRef(null);
  let textRef = useRef(null);
  let image = useRef([]);

  useEffect(() => {
    let tl = gsap
      .timeline({ defaults: { ease: 'none' } })
      .from(image.current[0], { top: '150%' }, 0)
      .fromTo(textRef, { yPercent: 85 }, { yPercent: 0 }, 0.1)
      .fromTo(image.current[1], { top: '100%' }, { top: '-40%' }, 0.5)
      .fromTo(image.current[2], { top: '100%' }, { top: '-30%' }, 0.7)
      .fromTo(image.current[3], { top: '100%' }, { top: '-30%' }, 0.9)
      .fromTo(image.current[4], { top: '100%' }, { top: '-30%' }, 1)
      .fromTo(image.current[5], { top: '100%' }, { top: '-40%' }, 1.2)
      .fromTo(image.current[6], { top: '100%' }, { top: '-40%' }, 1.4)
      .to(textRef, { yPercent: -100 }, 1.6)
      .to(image.current[0], { width: '100vw', height: '100vh', top: '0', yPercent: 0 });

    ScrollTrigger.create({
      trigger: sectionContainer,
      scroller: '#___gatsby',
      animation: tl,
      end: '+=10000 top',
      scrub: true,
      pin: true,
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <GalleryWrapper ref={el => (sectionContainer = el)}>
      <Container>
        <ImageOne ref={el => (image.current[1] = el)}>
          <GatsbyImage image={data.image2.childImageSharp.gatsbyImageData} />
        </ImageOne>
        <ImageTwo ref={el => (image.current[2] = el)}>
          <GatsbyImage image={data.image3.childImageSharp.gatsbyImageData} />
        </ImageTwo>
        <ImageThree ref={el => (image.current[3] = el)}>
          <GatsbyImage image={data.image4.childImageSharp.gatsbyImageData} />
        </ImageThree>
        <TextWrapper>
          <HugeMiddleText ref={el => (textRef = el)}>50 Years of Fencing</HugeMiddleText>
        </TextWrapper>
        <MiddleImage ref={el => (image.current[0] = el)}>
          <GatsbyImage image={data.image8.childImageSharp.gatsbyImageData} />
        </MiddleImage>
        <ImageFour ref={el => (image.current[4] = el)}>
          <GatsbyImage image={data.image5.childImageSharp.gatsbyImageData} />
        </ImageFour>
        <ImageFive ref={el => (image.current[5] = el)}>
          <GatsbyImage image={data.image6.childImageSharp.gatsbyImageData} />
        </ImageFive>
        <ImageSix ref={el => (image.current[6] = el)}>
          <GatsbyImage image={data.image7.childImageSharp.gatsbyImageData} />
        </ImageSix>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;

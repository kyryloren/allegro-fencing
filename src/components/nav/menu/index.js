import React, { useEffect, useRef } from 'react';
import { Power4, gsap } from 'gsap';
import { MovingLink, OutsideMovingLink, UnderlineLink } from '@components';
import {
  PageFill,
  SlideOver,
  SlideContainer,
  SlideBody,
  SlideFooter,
  InnerBody,
  ColWrapper,
  NavList,
  NavText,
  NavLabel,
  NavItem,
  SocialWrapper,
} from './style';

const Menu = ({ menuOpen, toggleMenu }) => {
  let popOver = useRef(null);
  let popOverBody = useRef(null);
  let backdrop = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    if (menuOpen) {
      tl.to(popOver, { xPercent: 0, opacity: 1, ease: Power4.easeOut, duration: 1 })
        .to(
          popOverBody,
          {
            xPercent: 0,
            ease: Power4.easeOut,
            duration: 1,
          },
          '-=1',
        )
        .to(
          backdrop,
          {
            autoAlpha: 1,
            backdropFilter: 'blur(20px)',
            ease: Power4.easeOut,
            duration: 0.6,
          },
          '-=1',
        );
    } else {
      tl.to(popOver, { xPercent: 100, opacity: 0, ease: Power4.easeOut, duration: 1 })
        .to(
          popOverBody,
          {
            xPercent: 50,
            ease: Power4.easeOut,
            duration: 1,
          },
          '-=1',
        )
        .to(
          backdrop,
          {
            backdropFilter: 'blur(0px)',
            autoAlpha: 0,
            ease: Power4.easeOut,
            duration: 0.6,
          },
          '-=1',
        );
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      if (window !== 'undefined') {
        window.scroll.stop();
      }
    } else {
      if (window !== 'undefined') {
        window.scroll.start();
      }
    }
  }, [menuOpen]);

  return (
    <>
      <PageFill ref={el => (backdrop = el)} onClick={toggleMenu} />

      <SlideOver ref={el => (popOver = el)}>
        <SlideContainer ref={el => (popOverBody = el)}>
          <SlideBody>
            <InnerBody>
              <ColWrapper>
                <NavLabel>Info</NavLabel>
                <div>
                  <NavText>
                    101-32 Dupont Street
                    <br />
                    Plainview, NY 11803
                  </NavText>
                  <SocialWrapper>
                    <div>
                      <OutsideMovingLink href="https://instagram.com" text="Instagram" />
                    </div>
                    <div>
                      <OutsideMovingLink href="https://facebook.com" text="Facebook" />
                    </div>
                  </SocialWrapper>
                </div>
              </ColWrapper>
              <ColWrapper>
                <NavLabel>Menu</NavLabel>
                <NavList>
                  <NavItem>
                    <MovingLink to="/about" text="About" />
                  </NavItem>
                  <NavItem>
                    <MovingLink to="/programs" text="Programs" />
                  </NavItem>
                  <NavItem>
                    <MovingLink to="/news" text="News" />
                  </NavItem>
                  <NavItem>
                    <MovingLink to="/contact" text="Contact" />
                  </NavItem>
                  <NavItem></NavItem>
                </NavList>
              </ColWrapper>
            </InnerBody>
          </SlideBody>
          <SlideFooter>
            <NavLabel>Get in touch</NavLabel>
            <UnderlineLink href="mailto:info@allegrofencing.com">
              info@allegrofencing.com
            </UnderlineLink>
          </SlideFooter>
        </SlideContainer>
      </SlideOver>
    </>
  );
};

export default Menu;

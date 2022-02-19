import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@styles';
import Menu from '../menu';
import {
  HeadStickWrapper,
  NavWrapper,
  LogoWrapper,
  MenuButton,
  MenuTitle,
  BtnMenuBox,
} from './style';
import AllegroLogo from '@images/logo.png';

const Bar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const handleKeydown = useCallback(
    e => {
      if (!menuOpen) return;

      if (e.which === 27 || e.key === 'Escape') toggleMenu();
    },
    [menuOpen, toggleMenu],
  );

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('keydown', e => handleKeydown(e));

      return () => {
        window.removeEventListener('keydown', e => handleKeydown(e));
      };
    }, 100);
  }, [handleKeydown]);

  return (
    <HeadStickWrapper data-scroll data-scroll-sticky data-scroll-target="#___sticky">
      <Container>
        <NavWrapper>
          <LogoWrapper to="/">
            <img src={AllegroLogo} alt="Allegro Fencing Center" />
          </LogoWrapper>
          <MenuButton aria-label="menu" onClick={toggleMenu}>
            <MenuTitle>menu</MenuTitle>
            <BtnMenuBox menuOpen={menuOpen}>
              <span />
              <span />
            </BtnMenuBox>
          </MenuButton>
          <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </NavWrapper>
      </Container>
    </HeadStickWrapper>
  );
};

export default Bar;

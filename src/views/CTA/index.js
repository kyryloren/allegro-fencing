import React from 'react';
import { CTASection, StyledImage, LinkWrapper } from './style';
import { Container, HugeText } from '@styles';

import AppearImage from '@images/filler/image9.png';

const CTA = () => {
  return (
    <CTASection>
      <Container>
        <LinkWrapper href="/" target="_blank" rel="noopener noreferrer">
          <HugeText>
            Book a <StyledImage src={AppearImage} alt="Sign up today" />
            class
          </HugeText>
        </LinkWrapper>
      </Container>
    </CTASection>
  );
};

export default CTA;

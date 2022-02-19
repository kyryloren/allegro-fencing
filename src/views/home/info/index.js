import React from 'react';
import { InfoSectionWrapper, BigDescriptionText, TextWrapper, DescriptionText } from './style';
import { Container, HugeText } from '@styles';

const Info = () => {
  return (
    <InfoSectionWrapper>
      <Container>
        <HugeText>Make an impact</HugeText>
        <HugeText>Stand your ground</HugeText>
        <BigDescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </BigDescriptionText>
        <TextWrapper>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </DescriptionText>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </DescriptionText>
        </TextWrapper>
      </Container>
    </InfoSectionWrapper>
  );
};

export default Info;

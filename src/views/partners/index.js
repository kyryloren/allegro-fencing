import React from 'react';
import { Container, HugeText } from '@styles';
import { SmallDescriptionText } from '../home/classes/style';
import { PartnersSection, PartnerWrapper, PartnerButton, SponsorImage } from './style';

import AF from '@images/sponsors/AF.png';
import AFA from '@images/sponsors/AFA.png';
import Beaver from '@images/sponsors/beaver.png';
import SFC from '@images/sponsors/SFC.png';

const Partners = () => {
  return (
    <PartnersSection>
      <Container>
        <HugeText>Partners</HugeText>
        <SmallDescriptionText>
          Our proud partners help us create the fencing studio you know of today.
        </SmallDescriptionText>
        <PartnerWrapper>
          <PartnerButton>
            <SponsorImage src={Beaver} alt="Beaver Fencing" />
          </PartnerButton>
          <PartnerButton>
            <SponsorImage src={AF} alt="Absolute Fencing" />
          </PartnerButton>
          <PartnerButton>
            <SponsorImage src={SFC} alt="Stamford Fencing Center" />
          </PartnerButton>
          <PartnerButton>
            <SponsorImage src={SFC} alt="Stamford Fencing Center" />
          </PartnerButton>
          <PartnerButton>
            <SponsorImage src={AFA} alt="Fencing Alliance" />
          </PartnerButton>
        </PartnerWrapper>
      </Container>
    </PartnersSection>
  );
};

export default Partners;

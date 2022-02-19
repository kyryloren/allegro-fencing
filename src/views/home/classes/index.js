import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, HugeText } from '@styles';
import {
  ClassesSectionWrapper,
  GridContainer,
  SmallDescriptionText,
  ProjectLeft,
  ProjectRight,
  ImageWrapper,
  ProjectText,
} from './style';

const Classes = ({ data }) => {
  return (
    <ClassesSectionWrapper>
      <Container>
        <HugeText>Classes</HugeText>
        <SmallDescriptionText>
          We offer a multitude of different classes for students of different ages and skillets
        </SmallDescriptionText>
        <GridContainer>
          <ProjectLeft>
            <ImageWrapper to="/">
              <GatsbyImage
                image={data.image2.childImageSharp.gatsbyImageData}
                alt="Class example"
              />
              <ProjectText>Class Example</ProjectText>
            </ImageWrapper>
          </ProjectLeft>
          <ProjectRight>
            <ImageWrapper to="/">
              <GatsbyImage
                image={data.image2.childImageSharp.gatsbyImageData}
                alt="Class example"
              />
              <ProjectText>Class Example</ProjectText>
            </ImageWrapper>
          </ProjectRight>
          <ProjectLeft>
            <ImageWrapper to="/">
              <GatsbyImage
                image={data.image2.childImageSharp.gatsbyImageData}
                alt="Class example"
              />
              <ProjectText>Class Example</ProjectText>
            </ImageWrapper>
          </ProjectLeft>
          <ProjectRight>
            <ImageWrapper to="/">
              <GatsbyImage
                image={data.image2.childImageSharp.gatsbyImageData}
                alt="Class example"
              />
              <ProjectText>Class Example</ProjectText>
            </ImageWrapper>
          </ProjectRight>
        </GridContainer>
      </Container>
    </ClassesSectionWrapper>
  );
};

export default Classes;

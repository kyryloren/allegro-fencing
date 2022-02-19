import React from 'react';
import { graphql } from 'gatsby';
import { Hero, About, Classes, Gallery, Info } from '@views/home';
import { Partners, CTA } from '@views';

const HomePage = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <About />
      <Classes data={data} />
      <Gallery data={data} />
      <Info />
      <Partners />
      <CTA />
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    image1: file(relativePath: { eq: "filler/image1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    image2: file(relativePath: { eq: "filler/image2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    image3: file(relativePath: { eq: "filler/image3.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    image4: file(relativePath: { eq: "filler/image4.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    image5: file(relativePath: { eq: "filler/image5.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    image6: file(relativePath: { eq: "filler/image6.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    image7: file(relativePath: { eq: "filler/image7.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    image8: file(relativePath: { eq: "filler/image8.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Head, SmoothScroll, Nav, Footer } from '@components';
import { GlobalStyle } from '@styles';

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => (
        <>
          <Head metadata={site.site.siteMetadata} />
          <SmoothScroll callbacks={location} />

          <GlobalStyle />
          <div id="___sticky">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

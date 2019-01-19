import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Hemlet from 'react-helmet';

import Layout from '../components/Layout';
import DisplayImage from './../assets/images/ryan.jpg';

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
          Welcome! I'm Ryan, or as my coworkers like to call me <strong>"Buns"</strong>!
          <br />
          My little slice of the internet pie. I like to always learn something new. Which made me create this site, I
          was sick of paying Wix for something I do for a living. Always looking for ways to optimize
        </p>
        <p>
          I like to look at life as a journey, you never know where tomorrow will take you, but you can control today to set you up for a successful tomorrow.
          When I'm not{' '}
          <a href="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif">
            tapping away at the keyboard
          </a>{' '}
          I like to do anything that doesn't have a screen. I've picked up
          reading and I enjoy biking around!
        </p>
        <p>
          Less, but better!
        </p>
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
    )
  }
}

export default SiteIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

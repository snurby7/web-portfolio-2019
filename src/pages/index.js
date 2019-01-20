import React from 'react';
import { graphql } from 'gatsby';
import Hemlet from 'react-helmet';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const SiteIndex = (props) => (
  <Layout>
        <Hemlet>
          <title>{props.data.site.siteMetadata.title}</title>
          <meta name="description" content={props.data.site.siteMetadata.description} />
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
        <Img fluid={props.data.ryan.childImageSharp.fluid} alt={props.data.site.siteMetadata.title} />
      </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    ryan: file(relativePath: { eq: "ryan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

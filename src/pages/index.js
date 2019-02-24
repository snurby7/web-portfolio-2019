import React from 'react'
import { graphql } from 'gatsby'
import Hemlet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import './index.css'

const SiteIndex = props => (
  <Layout>
    <Hemlet>
      <title>{props.data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content={props.data.site.siteMetadata.description}
      />
    </Hemlet>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
      <Img
        style={{ width: 400 }}
        fluid={props.data.ryan.childImageSharp.fluid}
        alt={props.data.site.siteMetadata.title}
      />
    </div>
    <div>
      <div className="header-style">
        Hi! I'm Ryan. I'm a software developer, <br></br> coffee lover, & tinkerer.
      </div>
    </div>
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
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

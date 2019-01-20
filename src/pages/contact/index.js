import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import contactData from '../../data/contact'

const Contact = (props) => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: props.data.site.siteMetadata.description }]}
      title={`Contact | ${props.data.site.siteMetadata.title}`}
    />

    <h2>Contact</h2>
    <br />

    {Object.keys(contactData).map(key => {
      if (contactData[key]) {
        return (
          <p key={key}>
            <b>{key}: </b>
            <a href={contactData[key]} target="_new">
              {contactData[key]}
            </a>
          </p>
        )
      }
    })}
  </Layout>
)

export default Contact

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

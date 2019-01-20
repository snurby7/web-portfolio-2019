import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import projects from './../../data/projects'

import '../../styles/styles.css'

class portfolioIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Portfolio | ${siteTitle}`}
        />
        <h2>Portfolio</h2>
        <br />
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Grid fluid>
            <Row>
              {projects.map(project => (
                <Col xs={12} sm={12} md={6} lg={6} key={project.title}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 250,
                        height: 200,
                        margin: 10,
                        background: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    />
                    <Link
                      className="btn"
                      to={'/portfolio/view'}
                      state={project}
                      key={project.title}
                    >
                      {project.title}
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default portfolioIndex

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

import React, { Component } from 'react';
import { Link } from 'gatsby';

import { rhythm } from './../utils/typography';

import './../styles/styles.css';

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: rhythm(24),
            maxWidth: 350,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link className="btn" activeClassName="btn btn-active" to={'/'}>
            Home
          </Link>
          <Link
            className="btn"
            activeClassName="btn btn-active"
            to={'/portfolio'}
          >
            Portfolio
          </Link>
          <Link className="btn" activeClassName="btn btn-active" to={'/blog'}>
            Blog
          </Link>
          <Link
            className="btn"
            activeClassName="btn btn-active"
            to={'/contact'}
          >
            Contact
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar

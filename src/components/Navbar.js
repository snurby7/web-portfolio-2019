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
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link className="nav-link" activeClassName="nav-link nav-link-active" to={'/'}>
            Home
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link nav-link-active"
            to={'/portfolio'}
          >
            Portfolio
          </Link>
          <Link className="nav-link" activeClassName="nav-link nav-link-active" to={'/blog'}>
            Blog
          </Link>
          <Link className="nav-link" activeClassName="nav-link nav-link-active" to={'/books'}>
            Books
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link nav-link-active"
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

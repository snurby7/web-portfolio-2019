import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'

const BookDisplay = props => {
  return (
    <div>
      <i>{props.title}</i> - {props.author}
      {props.thoughts && props.thoughts.length > 0 && (
        <div>{props.thoughts}</div>
      )}
      {!props.isUnread && (
        <div>
          <strong>{props.inProgress ? 'In Progress' : 'Finished'}</strong>
        </div>
      )}
    </div>
  )
}

export default BookDisplay

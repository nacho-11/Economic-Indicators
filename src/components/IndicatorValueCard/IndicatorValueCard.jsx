import React from 'react'

import { ListItem } from '@rneui/themed'
import PropTypes from 'prop-types'

function IndicatorValueCard(props) {
  const { date, value } = props
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{date}</ListItem.Title>
        <ListItem.Title>{value}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
}

IndicatorValueCard.prototype = {
  date: PropTypes.string,
  value: PropTypes.string,
}

IndicatorValueCard.defaultProps = {
  date: '2022-04-18',
  value: 1000,
}

export default IndicatorValueCard

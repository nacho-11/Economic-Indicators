import React from 'react'

import { ListItem } from '@rneui/themed'
import PropTypes from 'prop-types'

import { formatNumber } from '../../utils/number'
import styles from './styles'

function IndicatorValueCard(props) {
  const { date, value, unit } = props
  return (
    <ListItem bottomDivider>
      <ListItem.Content style={styles.content}>
        <ListItem.Title style={styles.date}>{date}</ListItem.Title>
        <ListItem.Title>{formatNumber(value, unit)}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
}

IndicatorValueCard.prototype = {
  date: PropTypes.string,
  value: PropTypes.string,
  unit: PropTypes.string,
}

IndicatorValueCard.defaultProps = {
  date: '2022-04-18',
  value: 1000,
  unit: 'Pesos',
}

export default IndicatorValueCard

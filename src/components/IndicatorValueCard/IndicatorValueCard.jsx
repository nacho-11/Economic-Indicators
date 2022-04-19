import React from 'react'

import { ListItem } from '@rneui/themed'

function IndicatorValueCard(props) {
  const { fecha, valor } = props
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{fecha}</ListItem.Title>
        <ListItem.Title>{valor}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
}

export default IndicatorValueCard

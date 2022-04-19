import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { ListItem, Icon } from '@rneui/themed'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

function IndicatorCard(props) {
  const { name, unit, code } = props
  const navigation = useNavigation()
  const goIndicatorValues = () => {
    navigation.navigate('IndicatorValues', { codigo: code })
  }

  const goIndicatorDetails = () => {
    navigation.navigate('IndicatorDetails', { codigo: code })
  }

  return (
    <ListItem
      Component={TouchableOpacity}
      bottomDivider
      onPress={goIndicatorValues}
    >
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>{unit}</ListItem.Subtitle>
      </ListItem.Content>
      <Icon name="info" type="feather" onPress={goIndicatorDetails} />
      <ListItem.Chevron />
    </ListItem>
  )
}

IndicatorCard.prototype = {
  name: PropTypes.string,
  unit: PropTypes.string,
  code: PropTypes.string,
}

IndicatorCard.defaultProps = {
  name: 'Dólar observado',
  unit: 'Pesos',
  code: 'dolar',
}

export default IndicatorCard

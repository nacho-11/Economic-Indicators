import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { ListItem, Icon } from '@rneui/themed'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

import { blue } from '../../styles/colors'
import styles from './styles'

function IndicatorCard(props) {
  const { name, unit, code } = props
  const navigation = useNavigation()
  const goIndicatorValues = () => {
    navigation.navigate('IndicatorValues', { codigo: code, title: name })
  }

  const goIndicatorDetails = () => {
    navigation.navigate('IndicatorDetails', { codigo: code, title: name })
  }

  return (
    <ListItem
      Component={TouchableOpacity}
      bottomDivider
      onPress={goIndicatorValues}
    >
      <ListItem.Content>
        <ListItem.Title style={styles.name}>{name}</ListItem.Title>
        <ListItem.Subtitle style={styles.unit}>{unit}</ListItem.Subtitle>
      </ListItem.Content>
      <Icon
        name="info"
        type="feather"
        onPress={goIndicatorDetails}
        color={blue}
      />
      <Icon name="keyboard-arrow-right" type="material" color={blue} />
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

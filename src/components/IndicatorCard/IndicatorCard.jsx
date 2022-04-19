import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { ListItem, Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'

function IndicatorCard(props) {
  const { nombre, unidad_medida: unidadMedida, codigo } = props.data
  const navigation = useNavigation()
  const goIndicatorValues = () => {
    navigation.navigate('IndicatorValues', { codigo })
  }
  return (
    <ListItem
      Component={TouchableOpacity}
      bottomDivider
      onPress={goIndicatorValues}
    >
      <ListItem.Content>
        <ListItem.Title>{nombre}</ListItem.Title>
        <ListItem.Subtitle>{unidadMedida}</ListItem.Subtitle>
      </ListItem.Content>
      <Icon name="info" type="feather" />
      <ListItem.Chevron />
    </ListItem>
  )
}

export default IndicatorCard

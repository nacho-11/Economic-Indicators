import React from 'react'

import { Text } from '@rneui/themed'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './styles'

function Loading(props) {
  const { text } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

Loading.prototype = {
  center: PropTypes.bool,
  text: PropTypes.string,
}

Loading.defaultProps = {
  text: 'Ha ocurrido un error, intente más tarde.',
}

export default Loading

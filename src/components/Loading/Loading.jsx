import React from 'react'

import PropTypes from 'prop-types'
import { ActivityIndicator, View } from 'react-native'

import { blue } from '../../styles/colors'
import styles from './styles'

function Loading(props) {
  const { center } = props
  return (
    <View style={styles.container(center)}>
      <ActivityIndicator color={blue} size="large" />
    </View>
  )
}

Loading.prototype = {
  center: PropTypes.bool,
}

Loading.defaultProps = {
  center: false,
}

export default Loading

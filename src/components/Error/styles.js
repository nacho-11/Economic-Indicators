import { StyleSheet } from 'react-native'

import { red, white } from '../../styles/colors'
import { normalizeFontSize, pHeight, pWidth } from '../../styles/normalize'

const styles = StyleSheet.create({
  container: {
    height: pHeight(1),
    width: pWidth(1),
    paddingTop: pHeight(0.1),
    alignItems: 'center',
    backgroundColor: white,
  },
  text: {
    fontSize: normalizeFontSize(16),
    color: red,
  },
})

export default styles

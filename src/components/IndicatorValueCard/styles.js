import { StyleSheet } from 'react-native'

import { blue } from '../../styles/colors'
import { normalizeFontSize, normalizePx } from '../../styles/normalize'

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: blue,
    fontFamily: 'Lato-Bold',
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { blue } from '../../styles/colors'
import { normalizeFontSize, normalizePx } from '../../styles/normalize'

const styles = StyleSheet.create({
  name: {
    fontSize: normalizeFontSize(14),
    fontFamily: 'Lato-Regular',
  },
  unit: {
    fontSize: normalizeFontSize(12),
    fontFamily: 'Lato-Regular',
    color: blue,
    paddingTop: normalizePx(10),
  },
})

export default styles

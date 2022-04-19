import { StyleSheet } from 'react-native'

import { normalizeFontSize } from '../styles/normalize'

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: normalizeFontSize(16),
    fontFamily: 'Lato-Regular',
  },
  title: {
    fontSize: normalizeFontSize(14),
    fontFamily: 'Lato-Regular',
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { blue, white } from '../../styles/colors'
import { normalizeFontSize, normalizePx, pHeight } from '../../styles/normalize'

const styles = StyleSheet.create({
  container: {
    minHeight: pHeight(1),
    backgroundColor: white,
    paddingHorizontal: normalizePx(20),
  },
  informationContainer: {
    marginBottom: normalizePx(20),
  },
  value: {
    color: blue,
    fontSize: normalizeFontSize(35),
    paddingVertical: normalizePx(20),
    alignSelf: 'center',
  },
  textName: {
    fontFamily: 'Lato-Bold',
    fontSize: normalizeFontSize(14),
    paddingBottom: normalizePx(10),
  },
  textValue: {
    fontSize: normalizeFontSize(14),
    color: blue,
  },
})

export default styles

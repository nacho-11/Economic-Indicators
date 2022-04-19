import { StyleSheet } from 'react-native'

import { white } from '../../styles/colors'
import { pHeight, pWidth } from '../../styles/normalize'

const styles = StyleSheet.create({
  container: center => ({
    height: pHeight(1),
    width: pWidth(1),
    paddingTop: pHeight(center ? 0 : 0.3),
    alignItems: 'center',
    justifyContent: center ? 'center' : 'flex-start',
    backgroundColor: white,
  }),
})

export default styles

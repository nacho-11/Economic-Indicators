import { createTheme } from '@rneui/themed'

import { normalizePx } from './normalize'

const myTheme = createTheme({
  ListItem: {
    containerStyle: {
      paddingVertical: normalizePx(14),
      borderBottomWidth: 1,
      paddingHorizontal: normalizePx(20),
    },
  },
  ListItemTitle: {
    style: {
      fontFamily: 'Lato-Regular',
      fontSize: normalizePx(16),
    },
  },
  Text: {
    style: {
      fontFamily: 'Lato-Regular',
    },
  },
})

export default myTheme

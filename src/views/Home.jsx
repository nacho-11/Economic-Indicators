import React, { useEffect } from 'react'

import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIndicators } from '../ducks/indicators'

function Home(props) {
  const { loading, data } = useSelector(state => state.Indicators)

  console.log(data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIndicators())
  }, [dispatch])

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  )
}

export default Home

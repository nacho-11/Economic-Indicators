import React, { useEffect } from 'react'

import { View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { IndicatorCard } from '../components'
import { fetchIndicators } from '../ducks/indicators'

function Home(props) {
  const { loading, data } = useSelector(state => state.Indicators)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIndicators())
  }, [dispatch])

  return (
    <View>
      <ScrollView>
        {Object.values(data).map((indicator, i) => (
          <IndicatorCard data={indicator} key={i} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Home

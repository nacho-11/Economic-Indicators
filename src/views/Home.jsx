import React, { useEffect } from 'react'

import { View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { IndicatorCard } from '../components'
import { fetchIndicators } from '../ducks/indicators'

function Home(props) {
  const { data, loading } = useSelector(state => state.Indicators.list)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIndicators())
  }, [dispatch])

  return (
    <View>
      <ScrollView>
        {data.map((indicator, i) => (
          <IndicatorCard data={indicator} key={i} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Home

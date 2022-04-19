import React, { useEffect } from 'react'

import { View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { IndicatorCard, Loading } from '../components'
import { fetchIndicators } from '../ducks/indicators'

function Home(props) {
  const { data, loading } = useSelector(state => state.Indicators.list)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIndicators())
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

  return (
    <View>
      <ScrollView>
        {data.map((indicator, i) => (
          <IndicatorCard
            name={indicator.nombre}
            unit={indicator.unidad_medida}
            code={indicator.codigo}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Home

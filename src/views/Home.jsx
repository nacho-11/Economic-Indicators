import React, { useEffect } from 'react'

import { Skeleton } from '@rneui/themed'
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

  if (loading) {
    return (
      <View>
        <Skeleton variant="rectangular" width={'100%'} height={50} />
      </View>
    )
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

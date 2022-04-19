import React, { useCallback, useEffect } from 'react'

import { ScrollView, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Error, IndicatorCard, Loading } from '../components'
import { fetchIndicators } from '../ducks/indicators'

function Home(props) {
  const { data, loading, error } = useSelector(state => state.Indicators.list)

  const dispatch = useDispatch()

  const getIndicators = useCallback(
    () => dispatch(fetchIndicators()),
    [dispatch],
  )

  useEffect(() => {
    getIndicators()
  }, [getIndicators])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getIndicators} />
        }
      >
        <Error />
      </ScrollView>
    )
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getIndicators} />
      }
    >
      {data.map((indicator, i) => (
        <IndicatorCard
          name={indicator.nombre}
          unit={indicator.unidad_medida}
          code={indicator.codigo}
          key={i}
        />
      ))}
    </ScrollView>
  )
}

export default Home

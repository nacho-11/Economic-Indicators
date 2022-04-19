import React, { useCallback, useEffect } from 'react'

import { RefreshControl, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Error, IndicatorValueCard, Loading } from '../../components'
import { fetchIndicatorValues } from '../../ducks/indicators'
import { formatDate } from '../../utils/date'

function IndicatorValues(props) {
  const { codigo } = props.route.params
  const { data, loading, error } = useSelector(
    state => state.Indicators.indicatorValues,
  )

  const { serie, unidad_medida: unidadMedida } = data

  const dispatch = useDispatch()

  const getIndicatorValues = useCallback(
    () => dispatch(fetchIndicatorValues({ indicator: codigo })),
    [dispatch, codigo],
  )

  useEffect(() => {
    getIndicatorValues()
  }, [getIndicatorValues])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getIndicatorValues} />
        }
      >
        <Error />
      </ScrollView>
    )
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getIndicatorValues} />
      }
    >
      {serie?.map((item, i) => (
        <IndicatorValueCard
          date={formatDate(item.fecha)}
          value={item.valor}
          unit={unidadMedida}
          key={i}
        />
      ))}
    </ScrollView>
  )
}

export default IndicatorValues

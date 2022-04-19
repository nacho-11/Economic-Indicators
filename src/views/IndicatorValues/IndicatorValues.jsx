import React, { useEffect } from 'react'

import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { IndicatorValueCard, Loading } from '../../components'
import { fetchIndicatorValues } from '../../ducks/indicators'
import { formatDate } from '../../utils/date'

function IndicatorValues(props) {
  const { codigo } = props.route.params
  const { data, loading } = useSelector(
    state => state.Indicators.indicatorValues,
  )

  const { serie, unidad_medida: unidadMedida } = data

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIndicatorValues({ indicator: codigo }))
  }, [dispatch, codigo])

  if (loading) {
    return <Loading />
  }

  if (!data.nombre) {
    return (
      <View>
        <Text>Sin datos</Text>
      </View>
    )
  }

  return (
    <View>
      <ScrollView>
        {serie?.map((item, i) => (
          <IndicatorValueCard
            date={formatDate(item.fecha)}
            value={item.valor}
            unit={unidadMedida}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default IndicatorValues

import React, { useEffect } from 'react'

import { Skeleton } from '@rneui/themed'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { IndicatorValueCard } from '../../components'
import { fetchIndicatorValues } from '../../ducks/indicators'

function IndicatorValues(props) {
  const { codigo } = props.route.params
  const { data, loading } = useSelector(
    state => state.Indicators.indicatorValues,
  )

  const { serie } = data

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIndicatorValues({ indicator: codigo }))
  }, [dispatch, codigo])

  if (loading) {
    return (
      <View>
        <Skeleton variant="rectangular" width={'100%'} height={50} />
      </View>
    )
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
          <IndicatorValueCard date={item.fecha} value={item.valor} key={i} />
        ))}
      </ScrollView>
    </View>
  )
}

export default IndicatorValues

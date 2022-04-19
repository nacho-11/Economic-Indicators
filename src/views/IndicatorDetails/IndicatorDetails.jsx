import React, { useEffect } from 'react'

import { Skeleton } from '@rneui/themed'
import { ScrollView, Text, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { useDispatch, useSelector } from 'react-redux'

import { IndicatorValueCard } from '../../components'
import { fetchIndicatorValues } from '../../ducks/indicators'

function IndicatorDetails(props) {
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

  const lastValue = serie[0]

  const lastTenValues = serie.slice(0, 10)

  const dataChart = {
    labels: lastTenValues.map(value => value.fecha),
    datasets: [
      {
        data: lastTenValues.map(value => value.valor),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Last values'], // optional
  }

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  }

  return (
    <View>
      <Text>${lastValue.valor}</Text>
      <Text>Nombre: {data.nombre}</Text>
      <Text>Fecha: {lastValue.fecha}</Text>
      <Text>Unidad de medida: {data.unidad_medida}</Text>
      <LineChart
        data={dataChart}
        width={400}
        height={220}
        chartConfig={chartConfig}
      />
      <ScrollView>
        {lastTenValues?.map((item, i) => (
          <IndicatorValueCard fecha={item.fecha} valor={item.valor} key={i} />
        ))}
      </ScrollView>
    </View>
  )
}

export default IndicatorDetails

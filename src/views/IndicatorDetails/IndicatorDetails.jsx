import React, { useEffect } from 'react'

import { Skeleton, Text } from '@rneui/themed'
import { View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIndicatorValues } from '../../ducks/indicators'
import { normalizePx, pWidth } from '../../styles/normalize'
import { formatDate } from '../../utils/date'
import { formatNumber } from '../../utils/number'
import styles from './styles'

const chartWidth = pWidth(1) - normalizePx(20) * 2

function IndicatorDetails(props) {
  const { codigo } = props.route.params
  const { data, loading } = useSelector(
    state => state.Indicators.indicatorValues,
  )

  const { unidad_medida: unidadMedida, serie } = data

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
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <Text style={styles.value}>
          {formatNumber(lastValue.valor, unidadMedida)}
        </Text>
        <Text style={styles.textName}>
          Nombre: <Text style={styles.textValue}>{data.nombre}</Text>
        </Text>
        <Text style={styles.textName}>
          Fecha:{' '}
          <Text style={styles.textValue}>{formatDate(lastValue.fecha)}</Text>
        </Text>
        <Text style={styles.textName}>
          Unidad de medida:{' '}
          <Text style={styles.textValue}>{data.unidad_medida}</Text>
        </Text>
      </View>
      <LineChart
        data={dataChart}
        width={chartWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  )
}

export default IndicatorDetails

import React, { useCallback, useEffect } from 'react'

import { Text } from '@rneui/themed'
import { RefreshControl, ScrollView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from 'victory-native'

import { Error, Loading } from '../../components'
import { fetchIndicatorValues } from '../../ducks/indicators'
import { normalizePx, pWidth } from '../../styles/normalize'
import { formatDate } from '../../utils/date'
import { formatNumber } from '../../utils/number'
import styles from './styles'

const chartWidth = pWidth(1) - normalizePx(20) * 2

function IndicatorDetails(props) {
  const { codigo } = props.route.params
  const { data, loading, error } = useSelector(
    state => state.Indicators.indicatorValues,
  )

  const { unidad_medida: unidadMedida, serie } = data

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

  const lastValue = serie[0]

  const lastTenValues = serie.slice(0, 10).reverse()

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getIndicatorValues} />
      }
    >
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
      <VictoryChart
        animate={{
          duration: 1000,
          onLoad: { duration: 500 },
        }}
        width={chartWidth}
        theme={VictoryTheme.material}
      >
        <VictoryAxis dependentAxis label="Valor" style={styles.axisY} />
        <VictoryAxis
          label="Fecha"
          fixLabelOverlap={true}
          style={styles.axisX}
        />
        <VictoryLine
          data={lastTenValues}
          x={item => formatDate(item.fecha)}
          y="valor"
        />
      </VictoryChart>
    </ScrollView>
  )
}

export default IndicatorDetails

export const commify = n => {
  const parts = n.toString().split('.')
  const numberPart = parts[0]
  const decimalPart = parts[1]
  const thousands = /\B(?=(\d{3})+(?!\d))/g
  return (
    numberPart.replace(thousands, '.') + (decimalPart ? ',' + decimalPart : '')
  )
}

export const formatNumber = (n, unit) => {
  let result = n
  switch (unit) {
    case 'Pesos':
      result = `$${commify(+n)}`
      break
    case 'Porcentaje':
      result = `${n}%`
      break
    case 'Dólar':
      result = `USD$${commify(+n)}`
      break
    default:
      break
  }
  return result
}

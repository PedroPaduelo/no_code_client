

export function mapLabel(dados, label, value) {
  return dados.map(item => ({ value: item[value], label: item[label]}))
}
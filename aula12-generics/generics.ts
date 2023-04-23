function first(array) {
  return array[0]
}
// criando um tipo genérico <ArrayType>
function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
  return array[array.length - 1]
}

const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']

const firstPilot = first(pilots)
const lastPilot = last(pilots)
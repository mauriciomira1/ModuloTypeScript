function Log() {
  return function (target, key, descriptor) {
    const originalMethod = descriptor.value  // descriptor é a função que recebemos, e aqui estamos duplicando ele p/ não alterar o original

    descriptor.value = function (...args: any[]) {
      console.log('------------------------------')
      console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`)   // o 'key' é o nome do descriptor

      const result = originalMethod.apply(this, args)

      console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
      console.log('------------------------------')

      return result
    }
  }
}

class Planet {
  name: string

  constructor(name: string) {
    this.name = name
  }

  @Log() // Altera a função que vem logo abaixo
  calcula(value: number) {
    console.log(`Calculando ${value} vezes 2`)
    return value * 2
  }

  @Log()
  invertName() {
    return this.name.split('').reverse().join('')
  }
}

const planet = new Planet('Terra')
const result = planet.calcula(5)

console.log(`Resultado: ${result}`)

planet.invertName()
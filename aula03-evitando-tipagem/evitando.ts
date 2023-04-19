function sendSpaceship(spaceship: { pilot: string, copilot?: string }) { //  a interrogação coloca esse item como opcional
}

sendSpaceship({ pilot: 'Maurício', copilot: 'Chewbaca' })
sendSpaceship({ pilot: 'Maurício' })

let input: unknown  // pode ser qualquer tipo (string, number, boolean)

let output: any // ts não capta nada, como se desativasse. Não é recomendado utilizá-lo
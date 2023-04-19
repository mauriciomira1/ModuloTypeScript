const planets = []
type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado"

function newPlanet(name: string, coordinates: [number, number, number, number], situation: Situation) {
  let planet = {
    name,
    coordinates,
    situation,
    satellites: []
  }

  if (situation) {
    planets.push(planet)
  } else {
    console.log('Essa situação não existe.')
  }
}

function updateSituation(name: string, situation: Situation) {
  let selectedPlanet: {
    name: string,
    coordinates: string,
    situation: Situation,
    satellites: string[]
  }

  selectedPlanet = planets.find(planet => { planet.name === name })
  console.log(selectedPlanet)
  if (selectedPlanet) {
    selectedPlanet.situation = situation
  } else {
    alert(`O planeta ${name} não foi encontrado.`)
  }
}

function addSatellite(name: string, satellite: string) {
  let selectedPlanet: {
    name: string,
    coordinates: string,
    situation: Situation,
    satellites: string[]
  }

  selectedPlanet = planets.find(planet => planet.name === name)
  if (selectedPlanet) {
    selectedPlanet.satellites.push(satellite)
    alert(`O satélite ${satellite} foi adicionado ao planeta ${name}.`)
  } else {
    alert(`O planeta ${name} não foi encontrado.`)
  }
}

function removeSatellite(name: string, satellite: string) {
  let selectedPlanet: {
    name: string,
    coordinates: string,
    situation: Situation,
    satellites: string[]
  }

  selectedPlanet = planets.find(planet => planet.name === name)
  if (selectedPlanet) {
    selectedPlanet.satellites = selectedPlanet.satellites.filter(s => s !== satellite)
    alert(`O satélite ${satellite} foi removido do planeta ${name}.`)
  } else {
    alert(`O planeta ${name} não foi encontrado.`)
  }
}

function listPlanets() {
  console.log(planets)
}
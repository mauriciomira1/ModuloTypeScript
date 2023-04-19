type Planet = "Terra" | "Vênus" | "Netuno" | "Marte" | "Mercúrio"

let planet: Planet
let homePlanet: Planet

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na terra")
  }
}

type GreetingCallBack = (name: string) => void

function greet(callbackfn: GreetingCallBack) {
  let name = "Maurício"
  callbackfn(name)
}
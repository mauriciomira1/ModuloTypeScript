const planets = [];
function newPlanet(name, coordinates, situation) {
    let planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    if (situation) {
        planets.push(planet);
    }
    else {
        console.log('Essa situação não existe.');
    }
}
function updateSituation(name, situation) {
    let selectedPlanet;
    selectedPlanet = planets.find(planet => { planet.name === name; });
    console.log(selectedPlanet);
    if (selectedPlanet) {
        selectedPlanet.situation = situation;
    }
    else {
        alert(`O planeta ${name} não foi encontrado.`);
    }
}
function addSatellite(name, satellite) {
    let selectedPlanet;
    selectedPlanet = planets.find(planet => planet.name === name);
    if (selectedPlanet) {
        selectedPlanet.satellites.push(satellite);
        alert(`O satélite ${satellite} foi adicionado ao planeta ${name}.`);
    }
    else {
        alert(`O planeta ${name} não foi encontrado.`);
    }
}
function removeSatellite(name, satellite) {
    let selectedPlanet;
    selectedPlanet = planets.find(planet => planet.name === name);
    if (selectedPlanet) {
        selectedPlanet.satellites = selectedPlanet.satellites.filter(s => s !== satellite);
        alert(`O satélite ${satellite} foi removido do planeta ${name}.`);
    }
    else {
        alert(`O planeta ${name} não foi encontrado.`);
    }
}
function listPlanets() {
    console.log(planets);
}

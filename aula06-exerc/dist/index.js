const planets = [];
function newPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`Planeta ${name} criado.`);
}
function validadePromptSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado');
        switch (situationInput) {
            case '1':
                situation = "habitado";
                validSituation = true;
                break;
            case '2':
                situation = "habitável";
                validSituation = true;
                break;
            case '3':
                situation = "inabitável";
                validSituation = true;
                break;
            case '4':
                situation = "inexplorado";
                validSituation = true;
                break;
            default:
                alert("A situação inserida foi inválida!");
                break;
        }
    }
    return situation;
}
function validadePromptPlanet(callbackfn) {
    const planetName = prompt("Informe o nome do planeta:");
    const planet = findPlanet(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert("Planeta não encontrado. Voltando ao menu...");
    }
}
function firstMenuOption() {
    const name = prompt("Insira o nome do planeta:");
    const coordinateA = Number(prompt('Informe a primeira coordenada:'));
    const coordinateB = Number(prompt('Informe a segunda coordenada:'));
    const coordinateC = Number(prompt('Informe a terceira coordenada:'));
    const coordinateD = Number(prompt('Informe a quarta coordenada:'));
    const situation = validadePromptSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?
  Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
  Situação: ${situation}?`);
    if (confirmation) {
        newPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
    else {
        alert('Operação cancelada. Nada foi alterado.');
    }
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(planet, situation) {
    if (planet) {
        planet.situation = situation;
        alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
    }
    else {
        alert(`O planeta ${planet} não foi encontrado.`);
    }
}
function addSatellite(planet, satellite) {
    if (planet) {
        planet.satellites.push(satellite);
        alert(`O satélite ${satellite} foi adicionado ao planeta ${planet.name}.`);
    }
    else {
        alert(`O planeta ${planet.name} não foi encontrado.`);
    }
}
function removeSatellite(planet, name) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
}
function listPlanets() {
    console.log(planets);
}

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
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(planet, situation) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
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
function secondMenuOption() {
    validadePromptPlanet(planet => {
        const situation = validadePromptSituation();
        updateSituation(planet, situation);
    });
}
function thirdMenuOption() {
    validadePromptPlanet(planet => {
        const satellite = prompt("Informe o nome do satélite: ");
        addSatellite(planet, satellite);
    });
}
function fourthMenuOption() {
    validadePromptPlanet(planet => {
        const satellite = prompt("Satélite a remover:");
        removeSatellite(planet, satellite);
    });
}
function fifthMenuOption() {
    let list = "Planetas:\n";
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates;
        list += `
    Nome: ${planet.name}
    Coordenadas: ${a}, ${b}, ${c}, ${d}
    Situação: ${planet.situation}
    Satélites: ${planet.satellites.length}
    `;
        planet.satellites.forEach(satellite => {
            list += `      - ${satellite}\n`;
        });
    });
    alert(list);
}
function Menu() {
    const option = prompt(`
  Escolha uma opção:

  1) Adicionar um planeta
  2) Alterar uma situação
  3) Adicionar um satélite
  4) Remover um satélite
  5) Listar planetas
  6) Sair
  `);
    switch (option) {
        case '1':
            firstMenuOption();
            Menu();
            break;
        case '2':
            secondMenuOption();
            Menu();
            break;
        case '3':
            thirdMenuOption();
            Menu();
            break;
        case '4':
            fourthMenuOption();
            Menu();
            break;
        case '5':
            fifthMenuOption();
            Menu();
            break;
        case '6':
            alert('Encerrando programa...');
            break;
        default:
            alert('Número Inválido! Tente novamente.');
            Menu();
            break;
    }
}
Menu();

const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`O membro ${member} não pôde ser adicionado. Limite atingido`);
    }
    else {
        spaceship.crew.push(member);
        alert(`O ${member} foi adicionado à tripulação da ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`A ${spaceship.name} não pode ser enviada. Nave já em missão.`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pôde ser enviada. Tripulação insuficiente`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} foi enviada para a missão.`);
    }
}

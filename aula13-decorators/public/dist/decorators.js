var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value; // descriptor é a função que recebemos, e aqui estamos duplicando ele p/ não alterar o original
        descriptor.value = function (...args) {
            console.log('------------------------------');
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`); // o 'key' é o nome do descriptor
            const result = originalMethod.apply(this, args);
            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`);
            console.log('------------------------------');
            return result;
        };
    };
}
class Planet {
    name;
    constructor(name) {
        this.name = name;
    }
    calcula(value) {
        console.log(`Calculando ${value} vezes 2`);
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    Log() // Altera a função que vem logo abaixo
], Planet.prototype, "calcula", null);
__decorate([
    Log()
], Planet.prototype, "invertName", null);
const planet = new Planet('Terra');
const result = planet.calcula(5);
console.log(`Resultado: ${result}`);
planet.invertName();

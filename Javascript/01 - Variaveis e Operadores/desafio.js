
/*Faça um programa para calcular o valor de uma viagem.

Você terá três variáveis sendo ela:

1. Preço do combústivel
2. Gasto médio do combústivel do carro por km.
3. Distância em KM da viagem.

Imprima no console o valor que será gasto de para realizar esta viagem.*/
//Entrada
const precoCombustivel = 5.79; //camelCase
const kmPorLitros = 12;
const distanciaEmKm = 1580; //200km
//Processo
const litrosConsumidos = (distanciaEmKm / kmPorLitros);
const valorGasto = litrosConsumidos * precoCombustivel;
//Saída
console.log(valorGasto.toFixed(2));



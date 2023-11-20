//Entrada
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = (distanciaEmKm / kmPorLitros);

//Abastencendo Com Etanol
if(tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2))
}
else{
    const  valorGasto = litrosConsumidos * precoGasolina; 
    console.log(valorGasto.toFixed(2))
}



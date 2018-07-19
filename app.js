// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLgn(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



// lugar.getLugarLatLgn(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// console.log(argv.direccion);

// clima.getClima(10.4805937, -66.90360629999999)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));
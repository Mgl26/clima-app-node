const axios = require('axios');

const getLugarLatLgn = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: location.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLgn
}
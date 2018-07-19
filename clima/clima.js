const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=69d0c1d39a181f02f5736918aafccc1f`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}
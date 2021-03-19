var objConfig = require('./config/defaultConfig');
var axios = require('axios');

var getConfig = (dataSource = null) => {
    let data = "";
    url = dataSource.url;

    let config = {
        url: url,
        method: dataSource.method,
    }

    if (config.method.toUpperCase() === 'GET') {
        config.params = data;
    } else {
        config.data = data;
    }

    console.log(objConfig);

    return config;
}

function requestService(dataSource){
    let config = getConfig(dataSource);
    return new Promise((resolve, reject) => {
        axios(config).then((response) => {
            resolve(response)
        })
            .catch((error) => {
                reject(error)
            })
    });
}

module.exports = requestService
import axios from 'axios'
var objConfig = require('../config/defaultConfig');

const getConfig = (dataSource = null) => {
    let data = "";
    let config = objConfig;
    config.url = dataSource.url;
    config.method = dataSource.method;

    if (config.method.toUpperCase() === 'GET') {
        config.params = data;
    } else {
        config.data = data;
    }

    return config;
}

async function requestService(dataSource = null){
    let config = getConfig(dataSource)
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
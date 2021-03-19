var objConfig = require('./config/defaultConfig');

var getConfig = (dataSource = null) => {
    let baseUrl = dataSource.baseUrl;
    let urlPath = dataSource.urlPath;
    let data = dataSource.data;
    let url = baseUrl + urlPath;
    url = dataSource.url;

    let config = {
        url: url,
        headers: dataSource.headers,
        timeout: dataSource.timeout,
        method: dataSource.method,
        auth: dataSource.auth
    }

    if (config.method.toUpperCase() === 'GET') {
        config.params = data;
    } else {
        config.data = data;
    }

    console.log(objConfig);

    return config;
}

function requestService(){
    let dataSource = null;
    let config = getConfig(dataSource);
    console.log(config);
}

module.exports = requestService
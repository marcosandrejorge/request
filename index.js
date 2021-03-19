import axios from "axios/dist/axios";

const objConfig = {
    baseUrl: "",
    headers: { "Content-Type": "application/json" },
    timeout: 8000,
    method: "",
    data: {},
    auth: {},
    urlPath: ""
};

const getConfig = (dataSource = null) => {
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

    return config;
}

const request = async (dataSource = null) => {
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

module.exports = {
    request
}
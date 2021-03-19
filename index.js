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
    let baseUrl = dataSource?.baseUrl || objConfig.baseUrl;
    let urlPath = dataSource?.urlPath || objConfig.urlPath;
    let data = dataSource?.data || objConfig.data
    let url = baseUrl + urlPath;
    url = dataSource?.url || url;

    let config = {
        url: url,
        headers: dataSource?.headers || objConfig.headers,
        timeout: dataSource?.timeout || objConfig.timeout,
        method: dataSource?.method || objConfig.method,
        auth: dataSource?.auth || objConfig.auth
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
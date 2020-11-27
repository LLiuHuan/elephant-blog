import axios, {AxiosRequestConfig} from 'axios'

const httpServer = (config: AxiosRequestConfig) => {
    const instance = axios.create({
        baseURL: '',
        timeout: 500000
    })

    if (config.method == 'get') {
        delete config.data;
    } else {
        delete config.params;
    }

    // 1. 请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    // 2. 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    // 3. 返回请求
    return instance(config)
}


export default httpServer;

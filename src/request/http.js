import axios from 'axios'
import QS from 'qs'
import store from '@/store/index'
import router from '../router'

//不同环境的配置 
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://localhost:8090'
}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com'
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.production.com'
}

//设置请求超时时间
axios.defaults.timeout = 10000;

//post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use(
    config => {
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        /**
         * 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
         * 否则抛出错误
         */
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                /**
                 * 401:未登录则跳转登录页面，并携带当前页面的路径
                 * 在登录成功后返回当前页，这一步需要在登录页操作
                 */
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                /**
                 * 403:token过期,对用户进行提示，清除本地token和清空vuex中token对象
                 * 跳转登录页面
                 */
                case 403:
                    this.$message('登录过期，请重新登录');
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    setTimeout(() => {
                        router.replace({
                            path: 'login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        })
                    }, 1000);
                    break;
                case 404:
                    this.$message('请求不存在');
                    break;

                default:
                    this.$message(error.response.data.message);

            }
            return Promise.reject(error.response);
        }

    }
)

/**
 * get方法，对应get请求
 * @param {String} url {请求的url地址}
 * @param {Object} params {请求时携带的参数}
*/
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

/**
 * post方法
  * @param {String} url {请求的url地址}
 * @param {Object} params {请求时携带的参数}
 */
export function post(url,params){
    return Promise((resolve,reject)=>{
        axios.post(url,QS.stringify(params))
        .then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}
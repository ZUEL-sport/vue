import axios from 'axios'
import QS from 'qs';
import storage from 'store'
import {notification} from "ant-design-vue";


const request =axios.create({
    baseURL:'http://compete.vaiwan.cn',//请求后端的ip地址
    // baseURL : 'http://zuelsport.vaiwan.com',
    timeout:60000,
    //请求头部
    headers:{
        //数据类型：表单
        'content-Type':'application/x-www-form-urlencoded;charser=UTF-8',
        'x-Requested-With':'XMLHttpRequest'
    },
    // transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 发送前的格式转换
    transformRequest:[
        function (data){
        // 对data进行序列化成URL形式，以&连接
        return QS.stringify(data)
        }
    ]
})

//异常拦截器
const errorHandler =(error) =>{
    //控制台输出异常
    console.log(error)

    notification.error({
        message: 'ERROR',
        description: '无法连接服务'
    })
    return Promise.reject(error)
}

//请求拦截器
request.interceptors.request.use(config =>{
    const token = storage.get("access_token")
    if(token){
        //后端希望前端以xx参数名储存token 就用[”xx“]
        config.headers["access_token"] =token
    }
    return config
},errorHandler)

//响应拦截器
request.interceptors.response.use(response=>{
    const res=response.data
    if(res.code!==0) {
        notification.error({
            message: 'ERROR',
            description: res.msg || '发生未知错误'
        })
        return Promise.reject(res.msg || 'Error')

    }else {
        return res;
    }

},errorHandler)

export default request
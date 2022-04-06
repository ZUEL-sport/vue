import request from "../utils/request"

//存储前端向后端请求接口的方法

/*
* 封装post方法
 */
export function post(url,data){
    return request({
        url:url,
        data:data,
        method:'post'
    })
}

/*
* 封装get方法
 */
export function get(url,data){
    return request({
        url:url,
        data:data,
        method:'get'
    })
}
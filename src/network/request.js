import axios from 'axios'   //引入axios
export let request = function(config){   //我们声明一个request的函数，并将它导出
    let instan = axios.create({         //创建axios的实例，并初始化一些配置项
            baseURL:'http://152.136.185.210:7878/API/M5',    //http://123.207.32.32:8000
            timeout:15000
    })
    instan.interceptors.request.use(config => {
        return config;    
    },err => {
       console.log(err);   
    })
    instan.interceptors.response.use(response => {
       return response.data ; 
    },err => {
       console.log(err);   
    })
    return instan(config);    //instan(config)的结果本身就是一个promise实例对象，她可以.then ， .catch
}
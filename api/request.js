import Request from 'luch-request';
import {EMS_APP_URL,EMS_APP_TEST_URL} from '@/api/config.js';
let baseURL
if (process.env.NODE_ENV === 'development') {
	baseURL = EMS_APP_TEST_URL;// 发布到生产环境时，此处代码会被摇树移除掉。
} else {
	baseURL = EMS_APP_URL;
}

const http = new Request({
	baseURL,
	timeout:300000,
})
//请求拦截器
http.interceptors.request.use((res)=>{
	const token = uni.getStorageSync('token');
	if(token){
		res.header = {
			"token":token
		}
	}else{
		uni.showToast({
			icon:'none',
			title:'请登录操作'
		})
		uni.reLaunch({
			url:'/pages/login/login'
		})
	}
	return res
},(err)=>{
	return Promise.reject(err)
})
//响应拦截器
http.interceptors.response.use(()=>{},()=>{})
export default http
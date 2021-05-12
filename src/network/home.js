import {request} from 'network/request.js';

export function getSilider(){
	return request({
		url:'/home/multidata',
		method:'GET'
	})
}
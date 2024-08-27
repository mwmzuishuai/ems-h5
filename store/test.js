import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useTest  = defineStore('test_x',()=>{
	const num = ref(0);
	const upNum = ()=>{
		num.value++
	}
	return {
		num,
		upNum
	}
})
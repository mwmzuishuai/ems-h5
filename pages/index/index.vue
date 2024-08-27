<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
			<view style="padding: 20px;">
				<up-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" @click="upNum"></up-button>
			</view>
			<view>
				{{num}}
			</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {useTest} from "@/store/test.js"
	import {storeToRefs} from 'pinia'
	const test = useTest()
	const {num} = storeToRefs(test)
	const {upNum} =test
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

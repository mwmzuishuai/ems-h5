<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
			<view style="padding: 20px;">
				<up-button type="primary" text="确定"></up-button>
				<up-button type="primary" :plain="true" text="镂空"></up-button>
				<up-button type="primary" :plain="true" :hairline="true" text="细边"></up-button>
				<up-button type="primary" :disabled="disabled" text="禁用"></up-button>
				<up-button type="primary" loading loadingText="加载中"></up-button>
				<up-button type="primary" icon="map" text="图标按钮"></up-button>
				<up-button type="primary" shape="circle" text="按钮形状"></up-button>
				<up-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></up-button>
				<up-button type="primary" size="small" text="大小尺寸"></up-button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
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

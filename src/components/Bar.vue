<template>
	<div>
		<div @click="handleClick">Bar</div>
		<div>{{ $store.state.name }}</div>
	</div>
</template>

<script>
	export default {
		methods: {
			handleClick() {
				console.log("bar");
			},
		},
		asyncData(store) {
			return store.dispatch('changeName', 'hua')
		},
	};
</script>

<style scoped></style>

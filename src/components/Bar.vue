<template>
	<div @click="handleClick">Bar</div>
</template>

<script>
	export default {
		methods: {
			handleClick() {
				console.log("bar");
			},
		},
	};
</script>

<style scoped></style>

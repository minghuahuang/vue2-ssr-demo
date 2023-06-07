<template>
	<div>
		{{ name }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "Foo",
			};
		},
	};
</script>

<style scoped>
	div {
		color: red;
	}
</style>

<template>
	<div class="header">
		<header>
			<h1>Персоны</h1>
		</header>
	</div>
</template>

<script>
export default {
	name: "persons-page",
	data() {
		return {
			persons: [
				{ name: Alexey, count: 0 },
				{ name: Peter, count: 0 },
			],
		};
	},
	methods: {
		addPerson() {},
	},
};
</script>

<style scoped></style>

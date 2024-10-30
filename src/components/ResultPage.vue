<template>
	<div class="results">
		<div
			class="result-for-person"
			v-for="person in persons"
			:key="person.name"
		>
			<span>{{ person.name }} должен {{ person.count }}</span>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import usePersonsAndProductsStore from "../stores/persons";

export default {
	name: "result-page",
	setup() {
		const store = usePersonsAndProductsStore();

        const persons = computed(() => store.persons);
		const products = computed(() => store.products);
		return {
            store,
            persons,
            products
        };
	},
};
</script>

<style scoped></style>

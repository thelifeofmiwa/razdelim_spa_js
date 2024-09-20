<template>
	<div class="persons__page">
		<div class="persons">
			<h1>Персоны</h1>
			<!-- Динамически генерируем список персон из массива persons -->
			<div v-for="person in persons" :key="person">
				{{ person }}
			</div>
		</div>
		<v-btn variant="outlined">+</v-btn>
		<div class="new__person" v-if="this.dialogVisible === true"></div>
		<v-form @submit.prevent>
			<v-text-field v-model="newPerson" label="Введите имя">
			</v-text-field>
		</v-form>
		<v-btn @click="addPersonsAndClearInput(this.newPerson)"
			>Добавить</v-btn
		>
	</div>
</template>

<script>
import usePersonsStore from "../stores/persons";

export default {
	name: "persons-page",
	setup() {
		const persons = usePersonsStore();
		persons.addPerson();
		return persons;
	},
	data() {
		return {
			dialogVisible: false,
			newPerson: "",
		};
	},
	methods: {
		addPersonsAndClearInput(newPerson) {
			this.addPerson(this.newPerson);
			this.newPerson = "";
		},
	},
};
</script>

<style scoped>
.new__person {
	margin-top: 30px;
}
</style>

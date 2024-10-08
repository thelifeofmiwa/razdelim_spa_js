<template>
	<div class="persons__page">
		<div class="persons">
			<h1>Персоны</h1>
			<!-- Динамически генерируем список персон из массива persons -->
			<div v-for="person in persons" :key="person">
				{{ person.name }}
			</div>
		</div>
		<!-- Здесь и далее искользуем компонент "v-btn" из UI-библиотеки Vuetify  -->
		<v-btn
			variant="outlined"
			v-if="this.dialogVisible === false"
			@click="this.dialogVisible = true"
			>+</v-btn
		>
		<!-- При клике на кнопку '+' генерируем форму для добавления новых людей, она так же из Vuetify  -->
		<div class="new__person" v-if="this.dialogVisible === true">
			<v-form @submit.prevent>
				<v-text-field
					v-model="newPerson"
					label="Введите имя"
				>
				</v-text-field>
			</v-form>
			<!-- Используем модифицированный метод хранилища при добавлении новых персон -->
			<v-btn @click="addPersonsAndClearInput(this.newPerson)"
				>Добавить</v-btn
			>
		</div>
		<v-btn class="next__page">На следующий этап</v-btn>
	</div>
</template>

<script>
import usePersonsStore from "../stores/persons";

export default {
	name: "persons-page",
	setup() {
		const persons = usePersonsStore();
		return persons;
	}, // инициализация массива persons из хранилища
	data() {
		return {
			dialogVisible: false, // переменная с булевым значением для контроля видимости формы добавления новых имён
			newPerson: "", // реактивная переменная, к которой привязана модель имени нового человека; динамически изменяется и очищается при добавлении нового человека
		};
	},
	methods: {
		addPersonsAndClearInput() {
			const person = {
				name: this.newPerson,
				count: 0,
				selectedProducts: []
			}
			this.addPerson(person);
			this.dialogVisible = false;
			this.newPerson = "";
		}, // Модифицируем метод хранилища для добавления нового человека: добавляем к нему скрытие формы и очищение реактивной переменной newPerson
	},
};
</script>

<style scoped>
.new__person {
	margin-top: 30px;
}
.next__page {
	margin-bottom: auto;
}
</style>

import { defineStore } from "pinia";

const usePersonsStore = defineStore("persons", {
	state: () => ({
		persons: [
			{ name: "Сергей", count: 0 },
			{ name: "Пётр", count: 0 },
		],
	}),
	actions: {
		addPerson(newPerson) {
			this.persons.push({ name: newPerson, count: 0 });
		}, // добавляем в массив persons новое имя
	},
});

export default usePersonsStore;

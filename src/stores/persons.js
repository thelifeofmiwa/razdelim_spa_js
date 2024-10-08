import { defineStore } from "pinia";

const usePersonsAndProductsStore = defineStore("persons", {
	state: () => ({
		persons: [],
		products: [],
	}),
	actions: {
		addPerson(newPerson) {
			this.persons.push(newPerson);
		}, // добавляем в массив persons новое имя
		addProduct(product) {
			this.products.push(product);
		}, // добавляем в массив Products новый продукт
	},
});

export default usePersonsAndProductsStore;

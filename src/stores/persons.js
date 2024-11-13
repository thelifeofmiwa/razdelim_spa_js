import { defineStore } from "pinia";

const usePersonsAndProductsStore = defineStore('persons', {
    state: () => ({
            persons: [], //массив персон
            products: [], //массив продуктов
    }),
    actions: {
        addNewPerson(newPerson) { //метод для добавления новой персоны
            this.persons.push(newPerson);
        },
        addNewProduct(newProduct){ //метод для добавления нового продукта
            this.products.push(newProduct);
        }
    }
});

export default usePersonsAndProductsStore;
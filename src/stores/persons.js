import { defineStore } from "pinia";

export const usePersonsStore = defineStore("persons", {
	state: () => ({
		persons: [
            'Alexey', 'Vitalii', 'Sergey'
        ],
	}),
    actions: {
        addPerson(newPerson){
            this.persons.push(newPerson)
        }
    }
});

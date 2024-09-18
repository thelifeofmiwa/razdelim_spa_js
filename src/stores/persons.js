import { defineStore } from "pinia";

export const usePersonsStore = defineStore("persons", {
	state: () => ({
		persons: [
            {name: Alexey, count: 0},
            {name: Peter, count: 0}
        ],
	}),
    actions: {
        addPerson(newPerson){
            this.persons.push(newPerson)
        }
    }
});

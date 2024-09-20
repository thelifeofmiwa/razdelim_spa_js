import { defineStore } from "pinia";

const usePersonsStore = defineStore("persons", {
	state: () => ({
		persons: [
            'Alexey', 'Vitalii', 'Sergey'
        ],
	}),
    actions: {
        addPerson(newPerson) {
			this.persons.push(newPerson);
		},
    }
});

export default usePersonsStore;

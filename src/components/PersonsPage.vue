<template>
    <div class="persons">
        <h1>Персоны</h1>
        <div v-for="person in persons" :key="person">
            {{ person }}
        </div>
    </div>
    <div class="new__person">
        <v-btn >
            +
        </v-btn>
    </div>
</template>

<script>
import { usePersonsStore } from '../stores/persons';
    export default {
        name: 'persons-page',
        setup(){
            const persons = usePersonsStore();

            return persons;
        }
    }
</script>

<style scoped>

</style>
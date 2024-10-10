<template>
    <div class="results">
        <div class="result-for-person" v-for="person in persons" :key="person.name">
            <span>{{ person.name }} должен {{ person.count }}</span>
        </div>
    </div>
</template>

<script>
import usePersonsAndProductsStore from '../stores/persons';

    export default {
        name: 'result-page',
        setup(){
            const personsAndProducts = usePersonsAndProductsStore();

            return personsAndProducts;
        }    
    }
</script>

<style scoped>

</style>
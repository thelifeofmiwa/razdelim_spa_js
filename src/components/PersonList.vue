<template>
    <div :class="{person__list: props.personsArray.length > 0}">
        <div
            class="person_in_list"
            v-for="person in props.personsArray"
            :key="person.name"
        >
            <b>{{ person.name }}</b>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    personsArray: {
        type: Array,
        required: true
    }
});

//декомпозированный список персон; используется на странице PersonsPage
</script>

<style scoped lang="scss">
.person__list {

    border: 3px solid black;
    border-radius: 3px;

    .person_in_list {
        margin: 10px 10px;
        padding: 5px;
    }
}
</style>
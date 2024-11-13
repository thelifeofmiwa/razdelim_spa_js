<template>
    <v-select
        variant="underlined"
        label="Кто оплатил продукт?"
        width="400"
        :items="props.itemProps"
    >
    </v-select>
</template>

<script setup>
const props = defineProps({
    itemProps: {
        type: Array,
        required: true
    }
});

//компонент представляет собой выпадющий список из ui-библиотеки Vuetify
</script>

<style scoped></style>

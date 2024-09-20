<template>
    <div class="products__page">
        <div class="products">
            <v-btn>+</v-btn>
        </div>
        <div class="add_product">
            <v-form>
                <v-text-field
                v-model="productName"
                label="Введите название продукта"
                >
                </v-text-field>
                <v-text-field
                v-model="productPrice"
                label="Введите цену"
                >

                </v-text-field>
            </v-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'products-page',
        data(){
            return{
                productName: '',
                productPrice: '',
            }
        }        
    }
</script>

<style scoped>
.products__page{
}
</style>
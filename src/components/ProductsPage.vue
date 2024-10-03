<template>
	<div class="products__page">
		<div class="products">
			<div v-for="product in products">
				{{ product.name }}
				{{ product.price }}
				<div v-for="person in persons">
					<v-btn>{{ person.name }}</v-btn>
				</div>
			</div>
			<v-btn
				@click="formVisible = true"
				v-if="formVisible === false"
				>+</v-btn
			>
		</div>
		<div class="add_product" v-if="formVisible === true">
			<v-form>
				<v-text-field
					v-model="productName"
					label="Введите название продукта"
					variant="outlined"
					placeholder="Пицца 4 сыра"
					width="500"
				>
				</v-text-field>
				<v-text-field
					v-model="productPrice"
					label="Введите цену"
					variant="outlined"
					placeholder="300"
				>
				</v-text-field>
				<v-btn
					variant="outlined"
					@click="addProductToArray"
					>Добавить</v-btn
				>
			</v-form>
		</div>
	</div>
</template>

<script>
import usePersonsStore from "../stores/persons";
// import useProductsStore from "../stores/products";

export default {
	name: "products-page",
	setup() {
		const persons = usePersonsStore();
		return persons;
	},
	data() {
		return {
			productName: "",
			productPrice: "",
			formVisible: false,
			products: [],
		};
	},
	methods: {
		addProductToArray() {
			this.products.push({
				name: this.productName,
				price: this.productPrice,
			});
			this.productName = "";
			this.productPrice = "";
			this.formVisible = false;
			// this.addProduct(this.productName, Number(this.productPrice));
			// this.productName = "";
			// this.productPrice = "";
			// this.formVisible = false; метод для работы со стором
		},
	},
};
</script>

<style scoped></style>

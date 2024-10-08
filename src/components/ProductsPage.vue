<template>
	<div class="products__page">
		<div class="products">
			<div class="payer">
				<v-select
					clearable="true"
					density="compact"
					label="Кто оплатил счёт?"
					variant="outlined"
					width="500"
					:items="personsToStringArray(persons)"
				></v-select>
			</div>
			<div
				v-for="person in persons"
				:key="person.count"
				style="margin-bottom: 20px"
			>
				{{ person.name }} -
				{{ calculatePersonShare(person) }}р
			</div>
			<div v-for="product in products" :key="product.name">
				{{ product.name }} -
				{{ product.price }}р
				<div
					v-for="person in persons"
					:key="person.name"
				>
					<v-btn
						@click="
							toggleProductAssignment(
								person,
								product
							)
						"
						>{{ person.name }}
						{{
							person.selectedProducts.includes(
								product
							)
								? "(выбран)"
								: ""
						}}</v-btn
					>
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
import usePersonsAndProductsStore from "../stores/persons";

export default {
	name: "products-page",
	setup() {
		const personsAndProducts = usePersonsAndProductsStore();
		return personsAndProducts;
	},
	data() {
		return {
			productName: "",
			productPrice: "",
			formVisible: false,
		};
	},
	methods: {
		personsToStringArray(objArray) {
			return objArray.map((obj) => obj.name);
		},
		addProductToArray() {
			const newProduct = {
				name: this.productName,
				price: parseFloat(this.productPrice),
				selectedBy: [],
			};
			this.addProduct(newProduct);
			this.productName = "";
			this.productPrice = "";
			this.formVisible = false;
		},
		toggleProductAssignment(person, product) {
			const isSelected = product.selectedBy.includes(person);
			if (isSelected) {
				// Удаляем человека из списка
				product.selectedBy = product.selectedBy.filter(
					(p) => p !== person
				);
			} else {
				// Добавляем человека в список
				product.selectedBy.push(person);
			}
		},
		calculatePersonShare(person) {
			let total = 0;
			this.products.forEach((product) => {
				if (product.selectedBy.includes(person)) {
					total +=
						product.price /
						product.selectedBy.length;
				}
			});
			return total.toFixed(2);
		},
		calculatePersonShare(person) {
			let total = 0;
			this.products.forEach((product) => {
				if (product.selectedBy.includes(person)) {
					total +=
						product.price /
						product.selectedBy.length;
				}
			});
			return total.toFixed(2);
		},
	},
};
</script>

<style scoped></style>

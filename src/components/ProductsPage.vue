<template>
	<div class="products__page">
		<h1>Продукты</h1>
		<div class="products">
			<div>
				<div
					v-for="product in products"
					:key="product.name"
					style="margin-bottom: 10px"
				>
					<div class="payer">
						<v-select
							clearable="true"
							density="compact"
							label="Кто оплатил продукт?"
							variant="outlined"
							width="500"
							:items="
								personsToStringArray(
									persons
								)
							"
						></v-select>
					</div>

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
				product.selectedBy = product.selectedBy.filter(
					(p) => p !== person
				);
			} else {
				product.selectedBy.push(person);
			}

			// Пересчитываем долю для каждого человека после изменения
			this.persons.forEach(this.calculatePersonShare);
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
			// Перезаписываем значение count в объекте person
			person.count = total.toFixed(2); // округляем до 2 знаков после запятой
		},
	},
};
</script>

<style scoped></style>

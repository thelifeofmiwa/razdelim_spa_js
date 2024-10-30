<template>
	<div class="products__page">
		<h1>Продукты</h1>
		<div :class="{products: products.length > 0}">
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
						v-model="product.paidBy"
						:items="
							personsToStringArray(
								persons
							)
						"
					></v-select>
				</div>

				{{ product.name }} -
				{{ product.price.toFixed(2) }}р
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
					>
						{{ person.name }}
						{{
							product.selectedBy.includes(
								person
							)
								? "(выбран)"
								: ""
						}}
					</v-btn>
				</div>
			</div>
			
		</div>
		<div class="add">
			<v-btn @click="formVisible = true" v-if="!formVisible"
				>+</v-btn
			>
		</div>
		

		<div class="add_product" v-if="formVisible">
			<v-form>
				<v-text-field
					v-model="productName"
					label="Введите название продукта"
					variant="outlined"
					placeholder="Пицца 4 сыра"
					width="500"
				/>
				<v-text-field
					v-model="productPrice"
					label="Введите цену"
					variant="outlined"
					placeholder="300"
				/>
				<v-btn
					variant="outlined"
					@click="addProductToArray"
					>Добавить</v-btn
				>
			</v-form>
		</div>

		<!-- <div class="debts">
			<h2>Долги</h2>
			<div v-for="person in persons" :key="person.name">
				<div>{{ person.name }}:</div>
				<div
					v-for="(
						debt, creditor
					) in calculateDebts(person)"
					:key="creditor.name"
				>
					{{ creditor.name }}:
					{{ debt.toFixed(2) }}р
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
import { computed } from "vue";
import usePersonsAndProductsStore from "../stores/persons";

export default {
	name: "products-page",
	setup() {
		const store = usePersonsAndProductsStore();

		const persons = computed(() => store.persons);
		const products = computed(() => store.products);

		return {
			store,
			persons,
			products,
		};
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
				paidBy: null,
			};
			this.store.addProduct(newProduct);
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
		},
		calculateDebts(person) {
			const debts = {};
			this.products.forEach((product) => {
				if (
					product.paidBy &&
					product.selectedBy.includes(person)
				) {
					const share =
						product.price /
						product.selectedBy.length;
					if (!debts[product.paidBy]) {
						debts[product.paidBy] = 0;
					}
					debts[product.paidBy] += share;
				}
			});
			return debts;
		},
	},
};
</script>

<style lang="scss">
.products__page{
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: rgb(201, 223, 223);

		.products{
			margin-top: 10px;
			padding: 10px;
			border: 1px solid black;
		}
		.add{
			margin-top: 15px;
		}
		.add_product{
			margin-top: 20px;
		}

}
</style>

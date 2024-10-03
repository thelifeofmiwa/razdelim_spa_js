import { defineStore } from "pinia";

const useProductsStore = defineStore("products", {
	state: () => ({
		products: [{ name: "Пиво", price: 100 }],
	}),
	actions: {
		addProduct(productName, productPrice) {
			this.products.push({
				name: productName,
				price: productPrice,
			});
		},
	},
});

export default useProductsStore;

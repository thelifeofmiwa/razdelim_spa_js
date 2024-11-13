import usePersonsAndProductsStore from "../stores/persons";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export function useProducts() {
    const store = usePersonsAndProductsStore(); //инициализируем хранилище
    const persons = computed(() => store.persons); // инициализируем массивы persons и products из хранилища
    const products = computed(() => store.products);

    const productName = ref(""); //реактивная переменная, связанная с первым инпутом формы(название продукта)
    const productPrice = ref(""); //реактивная переменная, связанная со вторым инпутом формы(цена продукта)
    let formVisible = ref(false); //реактивная переменная, отвечающая за видимость формы добавления продуктов

    const router = useRouter(); // Переменная для работы с роутером

    function addNewProductAndClearInput() {
        //модифицируем метод хранилища addNewProduct
        if (
            productName.value &&
            Number(productPrice.value) !== 0 &&
            !Number.isNaN(Number(productPrice.value))
        ) {
            //проверяем корректное заполнение полей
            const newProduct = {
                // описываем переменную newProduct
                name: productName.value,
                price: Number(productPrice.value),
                selectedBy: [],
                paidBy: "",
            };
            store.addNewProduct(newProduct); // используем метод хранилища
            productName.value = ""; //обнуляем значения в реактивных переменных
            productPrice.value = "";
            formVisible.value = false; //скрываем форму
        } else {
            alert("Введите название продукта и его цену!");
        }
    }

    function selectProduct(person, product) {
        //создаём метод для изменения полей selectedProducts и selectedBy
        if (!person.selectedProducts.includes(product.name)) {
            person.selectedProducts.push(product.name);
            product.selectedBy.push(person.name);
        } else {
            person.selectedProducts = person.selectedProducts.filter(
                (p) => p !== product.name
            );
            product.selectedBy = product.selectedBy.filter(
                (p) => p !== person.name
            );
        }
    }

    function arrayToString(personsArray) {
        // создаём метод для преобразования массива persons в массив строк из поля name объекта
        return personsArray.map((person) => person.name);
    }

    function goToNextPage() { // метод для работы с роутером 
        if (products.value.length > 0) {
            router.push({ path: "/result" });
        } else {
            alert("Добавьте хотя бы один продукт!");
        }
    }

    return {
        //возвращаем из функции все необходимые для компонента данные
        persons,
        products,
        productName,
        productPrice,
        formVisible,
        addNewProductAndClearInput,
        selectProduct,
        arrayToString,
        goToNextPage,
    };
}
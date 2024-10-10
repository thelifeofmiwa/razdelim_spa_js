<template>
  <div id="app">
    <start-page></start-page>
    <persons-page></persons-page>
    <products-page></products-page>
    <result-page></result-page>
  </div>
</template>

<script>
import PersonsPage from './components/PersonsPage.vue';
import ProductsPage from './components/ProductsPage.vue';
import ResultPage from './components/ResultPage.vue';
import StartPage from './components/StartPage.vue';


  export default {
      components: {StartPage, PersonsPage, ProductsPage, ResultPage}
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
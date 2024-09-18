<template>
  <div id="app">
    <start-page></start-page>
    <persons-page></persons-page>
  </div>
</template>

<script>
import PersonsPage from './components/PersonsPage.vue';
import ProductsPage from './components/ProductsPage.vue';
import StartPage from './components/StartPage.vue';


  export default {
      components: {StartPage, PersonsPage, ProductsPage}
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
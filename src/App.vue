<template>
  <div id="app">
    <start-page></start-page>
    <persons-page></persons-page>
  </div>
</template>

<script>
import PersonsPage from './components/PersonsPage.vue';
import StartPage from './components/StartPage.vue';


  export default {
      components: {StartPage, PersonsPage}
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
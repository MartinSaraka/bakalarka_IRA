<template>
  <q-page class="stroke-info-page">
    <div class="content-wrapper">
    <div class="q-pa-md q-gutter-md">
      <div class="  q-gutter-md">
        <div class="  left-section">
  <div class="app">

    <q-banner class="banner q-mb-lg">
        <div class="text-h5">Jednoduchá hra na precvičenie všímavosti !</div>
      </q-banner>
  <h2 class="textSize1">Nájdi 7 rozdielov</h2>
  <SpotTheDifference  />
</div>
</div>
</div>
</div>
    </div>
  </q-page>
</template>

<script>

import SpotTheDifference from 'src/components/differenceGame/SpotDifference.vue'
export default {
  name: 'App',
  components: { SpotTheDifference },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.stroke-info-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content-wrapper {
  flex-grow: 1;
  padding: 1.5rem;
}
.textSize {
  font-size: 26px;
}
.textSize1 {
  font-size: 18px;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;

}
.left-section {height: 750px;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.banner {
  background-color: #c36836;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.button_reaction {
  background: #0faf87;
  color: white;
  border: none;
  width: 80px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>

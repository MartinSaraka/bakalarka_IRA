<template>
  <div class="container">

    <div class="content-wrapper">
    <div class="q-pa-md q-gutter-md">

      <q-banner class="banner q-mb-lg">
        <div class="text-h5">Zobrazte svoje štatistiky pre zvolenú hru</div>
      </q-banner>
  <div class="q-pa-md" style="width: 300px">
    <!-- <div class="q-gutter-md">

      <q-select filled v-model="model" :options="options" label="Vyfiltrujte si hry podľa zamerania" />
      </div> -->
      </div>
    <div class="content q-my-lg-xl">

      <div class="card" v-on:click="goTo('gamesStatisticsList','pexeso')" >
        <div class="card-image">
          <img src="~assets/img/pexeso.svg" alt="Hra1" />
        </div>
        <div class="card-content">
          <h4 class="card-title1">Pexeso</h4>
          <h2 class="card-title">Zameranie: pamäť</h2>
          <h4 class="card-title">Obtiažnosť : stredná</h4>
          <p class="card-text">
            Pexeso - Stredne obtiažná hra zameraná na pamäť.
          </p>
        </div>
      </div>
      <div class="card" v-on:click="goTo('gamesStatisticsList','react')">
        <div class="card-image">
          <img src="~assets/img/reaction.jpg" alt="Hra2" />
        </div>
        <div class="card-content">
          <h4 class="card-title1">Skús reakcie !</h4>
          <h2 class="card-title">Zameranie: reakcie</h2>
          <h4 class="card-title">Obtiažnosť : ľahká</h4>
          <p class="card-text">
            Ľahko obtiažná hra zameraná na preskúšanie reakcií.
          </p>
        </div>
      </div>
      <div class="card" v-on:click="goTo('gamesStatisticsList','difference')">
        <div class="card-image">
          <img src="~assets/img/difference.png" alt="Hra3" />
        </div>
        <div class="card-content">
          <h4 class="card-title1">Nájdi rozdiely</h4>
          <h2 class="card-title">Zameranie: všímavosť</h2>
          <h4 class="card-title">Obtiažnosť : stredná</h4>
          <p class="card-text">
            Nájdi rozdiely - Stredne obtiažná hra zameraná na všímavosť.
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goTo (to: string, game:string) {
  localStorage.setItem('statisticToogle', game)
  router.push({ name: to })
}

</script>

<style>
.card-title1 {
font-size: 24px;
margin-bottom: 10px;
color: #333;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
}
.content-wrapper {
  flex-grow: 1;
  padding: 1.5rem;
}
.banner {
  background-color: #c36836;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 48px;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 24px;
  color: #666;
  margin-bottom: 40px;
}

.button-group {

  display: flex;
justify-content: center;
align-items: center;
}

.primary {
background-color: #007bff;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 5px;
margin-right: 10px;
cursor: pointer;
transition: background-color 0.2s;
}

.primary:hover {
background-color: #0062cc;
}

.secondary {
background-color: #fff;
color: #333;
border: 1px solid #ccc;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.2s;
}

.secondary:hover {
background-color: #f2f2f2;
}

.content {

display: flex;
flex-wrap: wrap;
justify-content: center;
}

.card {
background-color: #fff;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
border-radius: 5px;
margin: 20px;
width: 300px;
transition: transform 0.2s;
}

.card:hover {
transform: translateY(-5px);
}

.card-image {
height: 200px;
overflow: hidden;
border-radius: 5px 5px 0 0;
}

.card-image img {
width: 100%;
height: auto;
object-fit: cover;
}

.card-content {
padding: 20px;
}

.card-title {
font-size: 24px;
margin-bottom: 20px;
color: #333;
}
.card_game {
font-size: 24px;
color: #333;
}

.card-text {
font-size: 16px;
color: #666;
margin-bottom: 0;
line-height: 1.5;
}
.titleText {
font-size: 26px;
color: #666;
margin-bottom: 0;
line-height: 1.5;
}
</style>

<template>
  <div class="container">
    <div class="header">

    </div>
    <div class="content q-my-lg-xl">
      <div class="card" v-on:click="goTo('informations')">
        <div class="card-image">
          <img src="~assets/img/knowledge.jpg" alt="Information" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Mozgová príhoda</h2>
          <p class="card-text">
            Všeobecné informácie o cievnej mozgovej príhode, ktorých účel je zlepšiť informovanosť ľudí o danej problematike, ako zlepšiť prevenciu proti mozgovej príhode a aké sú jej následky.
          </p>
        </div>
      </div>
      <div class="card" v-on:click="goTo('videos')">
        <div class="card-image">
          <img src="~assets/img/physiotherapy.jpg" alt="My Portfolio" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Rehabilitačné videá</h2>
          <p class="card-text">
  Zoznam fyzioterapeutických videí za účelom domácej rehabilitácie po cievnej mozgovej príhode. Videá su natočené profesionálkou z praxe, ktorá sa venuje fyzioterapii pacientov po mozgovej príhode.
          </p>
        </div>
      </div>
      <div class="card" v-on:click="goTo('games')">
        <div class="card-image">
          <img src="~assets/img/games.jpg" alt="About Me" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Hry </h2>
          <p class="card-text">
            Jednoduché, zaujímavé hry, ktorých účelom je primárne zlepšenie motoriky a pamäti ľudí po cievnej mozgovej príhode. Pre zbieranie štatistiky o zlepšení v daných hrách je potrebné sa prihlásiť.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo (to: string) {
  router.push({ name: to })
}
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
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

.card-text {
font-size: 16px;
color: #666;
margin-bottom: 0;
line-height: 1.5;
}
</style>

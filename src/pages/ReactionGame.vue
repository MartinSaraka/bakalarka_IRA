<template>
  <q-page class="stroke-info-page">
    <div class="content-wrapper">
    <div class="q-pa-md q-gutter-md">
      <div class="  q-gutter-md">
        <div class="  left-section">
  <div class="app">

    <q-banner class="banner q-mb-lg">
        <div class="text-h5">Jednoduchá hra na precvičenie reakcií !</div>
      </q-banner>
  <h2 class="textSize1">Reakčný časovač, otestuj si svoje reakcie, stlač čo najrýchlejšie na štvorec, ktorý sa objaví určitý čas po stlačení tlačítka hrať</h2>
  <button class="button_reaction" @click="start" :disabled="isPlaying" >Hrať</button>
  <Block v-if="isPlaying" :dealy="delay" @end="endgame" />
  <Results v-if="showResults" :score="score" />
</div>
</div>
</div>
</div>
    </div>
  </q-page>
</template>

<script>

import Block from 'src/components/reactionGame/ReactionBlock.vue'
import Results from 'src/components/reactionGame/ReactionResults.vue'
export default {
  name: 'App',
  components: { Block, Results },
  data () {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start () {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endgame (reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
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

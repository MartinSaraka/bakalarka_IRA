<template>

  <div class="spot-the-difference">
    <div class="images-container row">
      <div class="image-wrapper col-md-8" @click="processClick($event, 0)">
        <img src="~assets/img/obrazok1.png" />

      </div>
      <div class="image-wrapper" @click="processClick($event, 1)">
        <img src="~assets/img/obrazok2.png" />
      </div>
    </div>
    <div class="score">
  Čas: {{ timer }}s | Kliknutia: {{ clicks }} | Nájdené rozdiely: {{ differencesFound }}/{{ maxDifferences }}
  <div class="toolbar">
    <button @click="reset" class="btn">
        Reštartovať hru
      </button>
</div>
</div>
<div v-for="(item, index) in levelData.differences.filter(dif =>dif.found)" :key="item.id">
    {{index+1}}. {{item.type}}
  </div>
  </div>

  <q-dialog v-model="alertDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Vyhral si</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Zvládol si to za Čas: {{ timer }}s | Kliknutia: {{ clicks }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useQuasar } from 'quasar'
import gameData from './gameData.json'
import axios from 'axios'
const isLoggedIn = ref(!!localStorage.getItem('access_token'))
const levelData = ref(computed(() => gameData[currentLevel.value]))

const alertDialog = ref(false)
const clicks = ref(0)
const timer = ref(0)
let timerInterval
const q = useQuasar()
const currentLevel = ref(0)
const differencesFound = ref(0)
const maxDifferences = computed(() => gameData[currentLevel.value].differences.length)
const foundDifferences = ref(computed(() => {
  return levelData.value.differences.filter(difference => difference.found === true)
}))
const processClick = (event) => {
  clicks.value++
  const rect = event.target.getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const clickY = event.clientY - rect.top
  for (const difference of levelData.value.differences) {
    const { x, y, width, height } = difference
    if (difference.found !== true && clickX >= x - width / 2 && clickX <= x + width / 2 && clickY >= y - height / 2 && clickY <= y + height / 2) {
      differencesFound.value++
      difference.found = true // Mark the difference as found
      foundDifferences.value = levelData.value.differences.filter(difference => difference.found)
      break
    }
  }

  if (differencesFound.value === maxDifferences.value) {
    stopTimer()
    if (isLoggedIn.value) {
      submitScore()
    }

    alertDialog.value = true
  }
}
function reset () {
  clicks.value = 0
  timer.value = 0
  differencesFound.value = 0
  for (const difference of levelData.value.differences) {
    if (difference.found) { difference.found = false }
  }
}
async function submitScore () {
  try {
    const response = await axios.post('http://localhost:5000/loggame', {
      user: localStorage.getItem('name'),
      name: 'NajdiRozdiely',
      time: timer.value,
      clicks: clicks.value,
      date: new Date().toLocaleString()
    })
    q.notify({
      type: 'positive',
      message: 'Uložená štatistika',
      position: 'top'
    })
    console.log(response.data)
  } catch (error) {
    q.notify({
      type: 'negative',
      message: 'Nepodarila sa uložiť štatistika',
      position: 'top'
    })
    console.error(error)
  }
}
watch(differencesFound, async () => {
  console.log(levelData.value.differences.filter(dif => dif.found))
  foundDifferences.value = levelData.value.differences.filter(dif => dif.found)
})
const startTimer = () => {
  timerInterval = setInterval(() => {
    timer.value++
  }, 1000)
}

const stopTimer = () => {
  clearInterval(timerInterval)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})

</script>

<style scoped>
.difference-indicator {
  position: absolute;
  border: 2px solid red;
  pointer-events: none;
  box-sizing: border-box;
}
.spot-the-difference {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:20px
}

.images-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.image-wrapper {
  position: relative;
  min-width: 400px;
    min-height: 255px;
    max-width: 400px;
    max-height: 255px;
}

.score {
  font-size: 1.2em;
}
.btn {
  appearance: none;
  background: transparent;
  border: 2px solid black;
  color: black;
  font: 26px  arial;
  letter-spacing: 0.3px;
  padding: 4px 12px;
  height: 40px;
  border-radius: 20px;
}
.toolbar {
  flex: auto;
  right: 12px;
  top: 15px;
  z-index: 3;
}
</style>

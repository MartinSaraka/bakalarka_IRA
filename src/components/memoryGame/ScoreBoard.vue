<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="scoreboard">
    <div class="scoreboard__board">
      <span class="text">Počet celkových ťahov: {{ turnCount }}</span>
      <div>
        <span v-for="turn in score" :class="`turn turn--${turn}`" />
      </div>

    <div>
      <div class="text-h2 colorText">{{ this.timeDisplay }}</div>
    </div>

      <q-dialog v-model="alert">
        <q-card>
        <q-card-section>
          <div class="text-h6">Vyhral si</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Zvládol si to za Čas: {{ this.time }}s | Kliknutia: {{ this.turnCount }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ScoreBoard',
  props: {
    score: {
      type: Array,
      default: () => null
    }
  },
  computed: {
    turnCount () {
      return this.score.length
    }
  },

  methods: {
    startTimer () {
      this.timerInterval = setInterval(() => {
        this.time++
        this.timeDisplay = this.formatTime(this.time)
      }, 1000)
    },
    formatTime (time) {
      const minutes = Math.floor(time / 60)
      const seconds = time % 60
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    },
    matchCount () {
      return this.score.filter(turn => turn === 'match').length
    },
    async submitScore () {
      try {
        const response = await axios.post('http://localhost:5000/loggame', {
          user: localStorage.getItem('name'),
          name: 'Pexeso',
          time: this.time,
          clicks: this.turnCount,
          date: new Date().toLocaleString()
        })

        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    score: {
      handler (newValue, oldValue) {
        console.log(this.score)
        console.log(this.matchCount())
        if (this.matchCount() === 8) {
          if (this.isLoggedIn) {
            console.log('zalogoval som pri memoryGAme')
            this.submitScore()
          }
          this.alert = true
          clearInterval(this.timerInterval)
          this.time = 0
        }
      },
      deep: true
    }
  },

  mounted () {
    this.startTimer()
  },
  data () {
    return {
      isLoggedIn: !!localStorage.getItem('access_token'),
      alert: false,
      time: 0,
      timerInterval: null,
      timeDisplay: '00:00'
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.text {
  color: black;
  display: inline-block;
  font: bold 16px arial;
  margin-right: 20px;
}
.colorText {
  color: black;

}
.scoreboard {
  color: #fff;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  padding: 15px 20px;
  top:0;
  left:0;
  width: 100%;
  @media (min-width: 700px) {
    padding: 15px 50px;
  }
}
.turn {
  height: 10px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 3px;
  width: 10px;
}
.turn--miss {
  border: 2px solid #dddddd;
  background-color: white;
}
.turn--match {
  background: rgb(30,255,255);
}
</style>

<template>
  <p>Reaction time - {{ score }} milliseconds</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>

import axios from 'axios'
export default {
  props: ['score'],
  data () {
    return {
      rank: null,
      isLoggedIn: !!localStorage.getItem('access_token')
    }
  },
  mounted () {
    if (this.isLoggedIn) {
      this.submitScore()
    }
    if (this.score < 250) {
      this.rank = 'Vynikajúce reflexy'
    } else if (this.score < 400) {
      this.rank = 'Dobré reflexy'
    } else {
      this.rank = 'Príliš pomalý'
    }
  },
  methods: {
    async submitScore () {
      try {
        const response = await axios.post('http://localhost:5000/loggame', {
          user: localStorage.getItem('name'),
          name: 'Reakcie',
          time: (this.score / 1000),
          clicks: 1,
          date: new Date().toLocaleString()
        })

        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

</script>

<style>
  .rank {
      font-size: 1.4em;
      color: #0faf87;
      font-weight: bold;
  }
</style>

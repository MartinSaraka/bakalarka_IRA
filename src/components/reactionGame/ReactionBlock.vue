<template>
  <div class="block_reaction" :style="{ top: top + 'px', left: left + 'px' }" v-if="showBlock" @click="stopTimer">
    Stlač ma
  </div>
</template>

<script>
export default {
  props: ['dealy'],
  data () {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
      top: 400 + Math.random() * (window.innerHeight - 600),
      left: 50 + Math.random() * (window.innerWidth - 200)
    }
  },
  mounted () {
    setTimeout(() => {
      this.showBlock = true
      this.startTimer()
    }, this.dealy)
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer () {
      clearInterval(this.timer)
      this.$emit('end', this.reactionTime)
    }
  }
}
</script>

<style scoped>
    .block_reaction {
      display: block;
    position: absolute;
        width: 100px;
        border-radius: 10px;
        background: #0faf87;
        color: white;
        padding: 20px;
        margin: 10px auto;
    }
</style>

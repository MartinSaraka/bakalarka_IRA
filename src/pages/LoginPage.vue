<!-- LoginPage je zobraný už z existujucého riešenia na zadanie z vpwa kde som tento login už raz robil -->
<template>
  <img src="~assets/img/wave.png" class="wave" alt="login-wave" />
   <div class="row" style="height: 90vh">
      <div class="col-0 col-md-6 flex justify-center content-center">
        <img src="~assets/img/Chat_SVG1.svg"  alt="login-image" />
      </div>
      <div
        v-bind:class="{
          'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
        }"
        class="col-12 col-md-6 flex content-center"
      >
  <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
        >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="~assets/img/avatar.svg" alt="avatar" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="col text-h6 ellipsis flex justify-center">
                <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">
                  IRA
                </h2>
              </div>
              <h6
                class="text-h6 q-my-none text-weight-regular flex justify-center"
              >
                Inovatívna rehabilitačná aplikácia
              </h6>
            </div>
          </q-card-section>

      <q-form ref="form" class="q-gutter-md">
        <q-card-section>
          <q-input
            name="nickName"
            id="nickName"
            v-model.trim="credentials.nickName"
            type="text"
            label="Použivateľské meno"
            autofocus
          />
          <q-input
            id="password"
            name="password"
            v-model="credentials.password"
            label="Heslo"
            :type="showPassword ? 'text' : 'password'"
            bottom-slots
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
          <q-checkbox
            id="rememberMe"
            v-model="credentials.remember"
            label="Zapamätať prihlásenie"
          />
        </q-card-section>

        <q-card-actions >
          <q-btn label="" size="sm" flat :to="{ name: 'register' }"></q-btn>
          <q-btn
            class="full-width"
            label="Prihlásenie"
            color="primary"
            rounded
            :loading="loading"
            @click="onSubmit"
          />
  <q-btn label="Vytvor účet" size="sm" flat :to="{ name: 'register' }"></q-btn>
  </q-card-actions>
      </q-form>
  </q-card>
  </div>
  </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import axios from 'axios'
export default defineComponent({
  name: 'LoginPage',
  data () {
    return {
      credentials: { nickName: '', password: '', remember: false },
      showPassword: false,
      router: useRouter(),
      $q: useQuasar()
    }
  },

  methods: {
    goTo (to: string) {
      this.router.push({ name: to })
    },
    async onSubmit () {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          nickName: this.credentials.nickName,
          password: this.credentials.password
        })

        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('name', this.credentials.nickName)
        localStorage.setItem('role', response.data.role)
        localStorage.getItem('access_token')
        localStorage.getItem('name')
        this.$q.notify({
          type: 'positive',
          message: 'Podarilo sa prihlásiť',
          position: 'top'
        })
        this.goTo('home')
      } catch (error) {
        console.error(error)
        this.$q.notify({
          type: 'negative',
          message: 'Nepodarilo sa prihlásiť, skontroluj údaje',
          position: 'top'
        })
      }
    }
  }
})
</script>
  <style scoped>
  .wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  </style>

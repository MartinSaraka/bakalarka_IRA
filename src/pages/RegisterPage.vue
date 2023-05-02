 <!-- RegisterPage je zobraný už z existujucého riešenia na zadanie z vpwa kde som tento register už raz robil -->
<template>
  <img src="~assets/img/wave.png" class="wave" alt="register-wave" />
    <div class="row" style="height: 90vh">
      <div class="col-0 col-md-6 flex justify-center content-center">
        <img src="~assets/img/Chat_SVG1.svg"   alt="register-image" />
      </div>
      <div v-bind:class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }" class="col-12 col-md-6 flex content-center">

<q-card
        v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
      >
        <q-form ref="form" class="q-gutter-md">
          <q-card-section>
            <q-input name="nick_name" label="Použivatelske meno" id="nick_name" type="name" v-model.trim="form.nick_name"
              autofocus>
            </q-input>
            <q-input name="name" label="Krstné meno" id="name" type="name" v-model.trim="form.name">
            </q-input>
            <q-input name="surname" label="Priezvisko" id="surname" type="name" v-model.trim="form.surname">
            </q-input>
            <q-input name="email" id="email" v-model.trim="form.email" type="email" label="Email" />
            <q-input id="password" name="password" v-model="form.password" label="Heslo"
              :type="showPassword ? 'text' : 'password'" bottom-slots>
              <template v-slot:append>
                <q-icon :name="showPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer"
                  @click="showPassword = !showPassword" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions >
        <q-btn label="" size="sm" flat :to="{ name: 'login' }"></q-btn>
        <q-btn
          class="full-width"
          label="Zaregistrovanie"
          color="primary"
          rounded
          :loading="loading"
          @click="onSubmit "
        />
<q-btn label="Prihlásenie" size="sm" flat :to="{ name: 'login' }"></q-btn>
</q-card-actions>
        </q-form>
        </q-card>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default defineComponent({
  name: 'RegisterPage',
  data () {
    return {
      form: { nick_name: '', name: '', surname: '', email: '', password: '' },
      showPassword: false,
      router: useRouter()
    }
  },

  methods: {
    goTo (to: string) {
      this.router.push({ name: to })
    },
    async onSubmit () {
      try {
        const response = await axios.post('http://localhost:5000/register', {
          username: this.form.name,
          password: this.form.password,
          nickname: this.form.nick_name,
          surname: this.form.surname,
          email: this.form.email
        })
        this.goTo('login')
        console.log(response.data)
      } catch (error) {
        console.error(error)
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

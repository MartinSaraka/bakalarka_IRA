<template>
  <q-form @submit.prevent="onSubmit">
    <q-input
      v-model="meno"
      label="Meno"
      outlined
      lazy-rules
      :rules="[val => !!val || 'Meno je potrebné']"
    />
    <q-input
      v-model="email"
      label="Email"
      outlined
      lazy-rules
      :rules="[
        val => !!val || 'Email je potrebný',
        val => validEmail(val) || 'Email nieje platný',
      ]"
    />
    <q-input
      v-model="sprava"
      label="Správa"
      outlined
      type="textarea"
      :rules="[val => !!val || 'Správa je potrebná']"
    />
    <div class="q-mt-md">
      <q-btn label="Zaslanie Emailu" v-on:click="showNotif()" type="submit" color="primary" />
    </div>
  </q-form>
</template>

<script>
import { useQuasar } from 'quasar'
export default {
  data () {
    return {
      $q: useQuasar(),
      meno: '',
      email: '',
      sprava: ''
    }
  },
  methods: {
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    onSubmit () {
      // Implement your form submission logic here
      console.log('Form submitted:', {
        meno: this.meno,
        email: this.email,
        sprava: this.sprava
      })
      this.meno = ''
      this.email = ''
      this.sprava = ''
    },
    showNotif () {
      this.$q.notify({
        message: 'Email poslaný úspešne',
        color: 'green'
      })
    }
  }
}
</script>

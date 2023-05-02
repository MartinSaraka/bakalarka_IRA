<template>
  <div class="container">
  <div class="content-wrapper">
    <div class="q-pa-md q-gutter-md">

      <q-banner class="banner q-mb-lg">
        <div class="text-h5">Pridanie pacienta pomocou jeho špecialného kódu pre sledovanie jeho štatistík.</div>
      </q-banner>

  <div class="q-pa-xs" style="width: 200px">

      </div>

    <div class="content q-my-lg-xl ">
      <q-form @submit.prevent="submitForm">
    <q-input  outlined v-model="inputValue" label="Zadaj špecialny kód pacienta" />
    <q-btn class="q-ma-lg" color="primary" type="submit" label="Pridaj pacienta" />
  </q-form>
    </div> </div>
      </div>

  </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const inputValue = ref('')

    function submitForm () {
      console.log('Submitted value:', inputValue.value)
    }

    return {
      inputValue,
      submitForm
    }
  }
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

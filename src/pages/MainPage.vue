<template>
  <div>
    <div class="homepageText">
      <div class="gt-md">
        <div class="q-pt-lg text-h1 text-weight-bold">
          <div class="q-ma-md">
            <p>Portál ohľadom </p>
          </div>
          <div class="q-ma-xl">
            <p>cievnej mozgovej porážky</p>
          </div>
        </div>
        <div class="q-ma-xl q-pt-xs">
          <h4>Informacie, videá pre domáce cvičenie a zaujímavé hry pre pacientov po porážke alebo pre všeobecnú vedomosť</h4>
        </div>
      </div>
      <div class="lt-lg">
        <div class="q-pt-sm text-h2 text-weight-regular">
          <p>Infrastructure as a</p>
          <p>service portal</p>
        </div>
        <div><h5>Informacie, videá pre domáce cvičenie a zaujímavé hry pre pacientov po porážke alebo pre všeobecnú vedomosť</h5></div>
      </div>
    </div>
    <div class="centerButton">
      <q-btn
        round
        padding="lg lg"
        style="background: #e5e9eb; color: black"
        label="Get started"
        :to="{ name: 'road' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.homepageText {
  word-break: normal;
  color: rgb(253, 255, 187)   ;
  text-align: center;
}
.centerButton {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
}
.mainText {
  font-size: 60px;
}
</style>

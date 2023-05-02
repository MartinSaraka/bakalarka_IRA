<template>
  <q-page class="stroke-info-page ">
    <div class="content-wrapper ">
    <div class="q-pa-md q-gutter-md">

      <q-banner class="banner q-mb-lg">
        <div class="text-h5">Základné informácie of cievnej mozgovej príhode.</div>
      </q-banner>
      <div class="  q-gutter-md">
        <div class=" row  left-section">
    <!-- What is a stroke? -->
    <q-card class="q-ma-md col-md-8" id="what-is-a-stroke"  >
      <q-card-section>
        <div class="text-h4">Čo je cievna mozgová príhoda     ?</div>
      </q-card-section>
      <q-card-section>
        <p>
          Cievna mozgová príhoda (Iktus, mŕtvica, porážka) nastáva pri poškodení ohraničenej
oblasti mozgu s charakteristickými príznakmi poruchy jeho funkcie, vznikajúce v
dôsledku náhlej poruchy prekrvenia pri čiastočnom alebo úplnom uzatvorení mozgovej
tepny alebo následkom neúrazového krvácania z tepny pričom sa krv rozleje do
priestorov obklopujúcich mozgové bunky.<br>
 V oboch prípadoch mozgové bunky
nedokážu z krvi získať kyslík a živiny, ktoré potrebujú, a začnú odumierať v priebehu
niekoľkých minút. To môže spôsobiť trvalé poškodenie mozgu, dlhodobú invaliditu
alebo dokonca smrť.
        </p>
      </q-card-section>
      <!-- Add more sections about stroke -->
      <div class="q-pa-md q-gutter-sm">

<q-img
  src="~assets/img/stroke1.jpg  "
  spinner-color="white"
  style="height: 400x; max-width: 550px"
/>
</div>
    </q-card>

    <!-- Symptoms -->
    <q-card class="q-ma-md col-md-8" id="symptoms" >
      <q-card-section>
        <div class="text-h4">Symptómy</div>
      </q-card-section>
      <q-card-section>
        Bežné príznaky cievnej mozgovej príhody zahŕňajú :

      <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>necitlivosť alebo slabosť najmä na jednej strane tela</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>náhlu zmätenosť</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>problémy s rozprávaním alebo
porozumením reči</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>znáčné problémy s videním v jednom alebo oboch očiach</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>problémy
s chôdzou, závraty, strata rovnováhy alebo koordinácie</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>náhla silná bolesť hlavy
bez známej príčiny</q-item-section>
      </q-item>
    </q-list>
  </div>

      </q-card-section>
    </q-card>

    <!-- Risk Factors -->
    <q-card class="q-ma-md col-md-8" id="risk-factors" >
      <q-card-section>
        <div class="text-h4">Rizikové faktory</div>
      </q-card-section>

  <div class="q-pa-md q-gutter-sm">

    <q-img
      src="~assets/img/stroke2.png"
      spinner-color="white"
      style="height: 300x; max-width: 450px"
    />
  </div>
    </q-card>

    <!-- Prevention -->
    <q-card class="q-ma-md col-md-8" id="prevention" >
      <q-card-section>
        <div class="text-h4">Prevencia</div>
      </q-card-section>
      <q-card-section>
        Základné prvky ktoré vám pomožu v prevencii proti cievnej mozgovej príhode :
        <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>Udržujte zdravý krvný tlak</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Udržujte zdravý krvný tlak</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Kontrola cukrovky</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Jedzte vyváženú stravu</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Obmedzte konzumáciu alkoholu</q-item-section>
      </q-item>
    </q-list>
  </div>

      </q-card-section>
    </q-card>

    <!-- Treatment -->
    <q-card class="q-ma-md col-md-8" id="treatment" >
      <q-card-section>
        <div class="text-h4">Liečba</div>
      </q-card-section>
      <q-card-section>
        <p>
          Liečba mŕtvice závisí od typu mŕtvice a závažnosti stavu. Vo všeobecnosti možnosti liečby zahŕňajú lieky,
chirurgia a rehabilitácia. Pri podozrení na mozgovú príhodu je dôležité okamžite vyhľadať lekársku pomoc.
        </p>
      </q-card-section>
    </q-card>
    <!-- FAQs -->
    <q-card class="q-ma-md col-md-8"  >
      <q-card-section>
        <div class="text-h4">Najčastejšie otázky ohľadom cievnej mozgovej príhode</div>
      </q-card-section>
      <q-card-section>
        <q-expansion-item icon="help_outline" label="
Aký je rozdiel medzi ischemickou a hemoragickou cievnou mozgovov príhodou?">
          <p>
Ischemická mozgová príhoda nastane, keď krvná zrazenina zablokuje prietok krvi do mozgu. Hemoragická mŕtvica nastane, keď krvná cieva v mozgu praskne a spôsobí krvácanie v okolitom mozgovom tkanive.
          </p>
        </q-expansion-item>
        <!-- Add more FAQ items -->
      </q-card-section>
    </q-card>
  </div>
  <div class="col-md-4 right-section">
    <q-card class="q-ma-md"  v-scroll-fire="fadeIn" transition="q-transition--fade">
  <q-card-section>
    <div class="text-h4">Dôležité stránky</div>
  </q-card-section>
  <q-card-section>
    <ul>
      <li><a href="https://www.stroke.org/" target="_blank">National Stroke Association</a></li>
      <li><a href="https://www.strokeassociation.org/" target="_blank">American Stroke Association</a></li>
      <li><a href="https://www.stroke.org.uk/" target="_blank">Stroke Association (UK)</a></li>
      <!-- Add more resource links -->
    </ul>
  </q-card-section>
</q-card>
<q-card class="q-ma-md"  v-scroll-fire="fadeIn" transition="q-transition--fade">
  <q-card-section>
    <div class="text-h4">Kontaktujte nás ak potrebujete ujasniť nejaké informácie</div>
  </q-card-section>
  <q-card-section>
    <contact-form />
  </q-card-section>
</q-card>
</div>
</div>
      </div>
    </div>
  </q-page>
</template>
<script>
import ContactForm from 'components/ContactForm.vue'

export default {

  components: {
    ContactForm
  },
  methods: {
    fadeIn (el, done) {
      el.style.opacity = 0
      setTimeout(() => {
        el.style.opacity = 1
        done()
      }, 300)
    }
  },
  data () {
    return {

      riskFactors: [
        {
          title: 'High blood pressure',
          description: 'A major risk factor for stroke.'
        }
        // ...other risk factors
      ]

    }
  }
}
</script>

<style scoped>
.left-section {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.right-section {
  background-color: #f2f2f2;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.stroke-info-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

}
.header {
  background-color: #5c6bc0;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.content-wrapper {
  flex-grow: 1;
  padding: 1.5rem;
}
.q-ma-md {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.text-h4 {
  margin-bottom: 0.5rem;
}

.q-list.two-line q-item {
  padding: 1rem;
}

.q-list.two-line q-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.page-header {
  background-color: #5c6bc0;
  color: white;
  border-radius: 10px;
}

.banner {
  background-color: #c36836;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.card-image {

overflow: hidden;
border-radius: 5px 5px 0 0;
}
.q-card {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  background-color: white;
}
.q-card:last-child {
  margin-bottom: 0;
}
.q-expansion-item {
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.q-expansion-item:not(:last-child) {
  margin-bottom: 0.5rem;
}

.q-expansion-item.q-item--active {
  background-color: #f5f5f5;
}
</style>

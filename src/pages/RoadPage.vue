<template>
  <div class="q-ma-lg-xl row items-start q-gutter-md justify-center">
    <div class="row justify-center">
      <q-card
        style="background: #b29a9a"
        v-ripple
        class="col-lg-4 col-md-2 my-card q-ma-xl notificationWindow text-white cardSize q-hoverable cursor-pointer"
        @click="goTo('informations')"
      >
        <q-card-section>
          <div class="row justify-center q-mb-md">
            <q-icon name="mdi-keyboard" size="40px" class="alignText" />
          </div>
          <q-separator dark class="q-mb-md" />
          <div class="text-h6 alignText">Súhrn všeobecných </div>
          <div class="text-h6 alignText infrastructure">INFORMÁCII</div>
          <div class="text-h6 alignText">ohľadom mozgovej príhode</div>
        </q-card-section>
      </q-card>

      <q-card
        v-ripple
        style="background: #b29a9a"
        class="col-lg-4 col-md-2 my-card q-ma-xl notificationWindow text-white cardSize q-hoverable cursor-pointer"
        @click="goTo('videos')"
      >
        <q-card-section>
          <div class="row justify-center q-mb-md">
            <q-icon
              name="mdi-briefcase-outline"
              size="40px"
              class="alignText"
            />
          </div>
          <q-separator dark class="q-mb-md" />
          <div class="text-h6 alignText">Fyzioterapeutické</div>
          <div class="text-h6 alignText infrastructure">VIDEÁ</div>
          <div class="text-h6 alignText">pre cvičenie s pacientami po mozgovej príhode</div>
        </q-card-section>
      </q-card>

      <q-card
        v-ripple
        style="background: #b29a9a"
        class="col-lg-4 col-md-2 my-card q-ma-xl notificationWindow text-white cardSize q-hoverable cursor-pointer"
        @click="goTo('games')"
      >
        <q-card-section>
          <div class="row justify-center q-mb-md">
            <q-icon
              name="mdi-account-group-outline"
              size="40px"
              class="alignText"
            />
          </div>
          <q-separator dark class="q-mb-md" />
          <div class="text-h6 alignText">Jednoduché a zábavné </div>
          <div class="text-h6 alignText infrastructure">Hry</div>
          <div class="text-h6 alignText">pre zabavnejšiu rehabilitáciu</div>
        </q-card-section>
      </q-card>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo (to: string) {
  router.push({ name: to })
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 250px;
}
.alignText {
  text-align: center;
}
.cardSize {
  max-height: 260px;
  max-width: 350px;
}
.infrastructure {
  color: #5a002e;
  font-weight: 800;
}
</style>

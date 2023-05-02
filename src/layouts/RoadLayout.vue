<template>
  <q-layout view="hHh lpR fFf" class="bg-telekom">
    <q-header elevated class=""></q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style>
.bg-telekom {
  background-color: #c9c4c4;
}
.bg-image {
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.notificationWindow {
  background-color: #a4517a;
}
</style>

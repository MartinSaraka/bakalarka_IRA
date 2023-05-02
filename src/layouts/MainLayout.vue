<template>
  <q-layout view="hHh lpR fFf" >
    <q-header elevated />
    <top-header></top-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TopHeader from 'src/components/TopHeader.vue'
</script>

<style>

</style>

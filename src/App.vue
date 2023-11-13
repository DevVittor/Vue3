<script setup>
import { RouterView } from "vue-router";
import HeaderComp from "./components/Header.vue";
import FooterComp from "./components/Footer.vue";
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>
<style scoped></style>
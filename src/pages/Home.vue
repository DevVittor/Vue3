<script setup>
document.title = "Home";
import Anuncio from "../components/Anuncio.vue";
import Content from "../components/Content.vue";
import Filter from "../components/Filter.vue";
</script>

<template>
  <main>
    <Anuncio />
    <Filter />
    <Content />
  </main>
</template>

<style scoped></style>

<script setup>
document.title = "Home";
import Anuncio from "../components/Anuncio.vue";
import Content from "../components/Content.vue";
import Filter from "../components/Filter.vue";
import Galeria from "../components/Galeria.vue";
</script>

<template>
  <main>
    <Anuncio />
    <Filter />
    <Galeria/>
  </main>
</template>

<style scoped></style>

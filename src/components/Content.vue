<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const urlFotos = ref([]);

onMounted(() => {
  axios
    .get("http://localhost:8080/")
    .then((res) => {
      urlFotos.value = res.data.fotos;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>
<template>
  <a href="/perfil">Perfil</a>
  <section>
    <div
      className="m-auto w-full 2xl:columns-4 md:columns-4 sm:columns-2 gap-1.5 p-1.5"
    >
      <div v-for="items in urlFotos" class="mb-1.5 break-inside-avoid">
        <img class="w-full object-cover" :src="items" alt="imagem" />
      </div>
    </div>
  </section>
</template>

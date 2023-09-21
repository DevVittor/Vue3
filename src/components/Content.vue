<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";


const urlFotos = ref([]);

onMounted(() => {
  axios
    .get("http://localhost:8080/")
    .then((res) => {
      urlFotos.value = res.data.fotos;
      document.title = res.data.page;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>
<template>
  <section>
    <div class="container-card">
      <div class="box-card">
        <div class="card" v-for="items in urlFotos">
          <RouterLink to="/2">
            <img class="h-full w-full object-cover pointer-events-none" :src="items" alt="Imagem">
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  height: auto;
  width: 100%;
  padding-bottom: 60px;
}

.card {
  height: 350px;
  width: 220px;
  background: black;
  border-radius: 10px;
}

@media screen and (max-width:460px) {
  .card {
    height: 450px;
    width: 320px;
  }
}
</style>
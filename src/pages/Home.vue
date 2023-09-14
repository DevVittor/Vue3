<script setup>
document.title = "Home";
import Anuncio from "../components/Anuncio.vue";
//import Content from "../components/Content.vue";
import Filter from "../components/Filter.vue";
</script>

<template>
  <main>
    <Anuncio />
    <Filter />
    <div class="container-card">
      <div class="box-card">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container-card{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.box-card{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  height: auto;
  width: 100%;
  padding-bottom: 20px;
}
.card{
  height: 350px; 
  width: 220px;
  background: black;
  border-radius: 10px;
}
@media screen and (max-width:460px){
  .card{
    height: 450px;
    width: 320px;
  }
}
/*@media screen and (max-width:375px){
  .card{
    height: 450px;
    width: 320px;
  }
}*/
</style>

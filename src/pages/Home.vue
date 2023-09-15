<script setup>
document.title = "Home";
import Anuncio from "../components/Anuncio.vue";
//import Content from "../components/Content.vue";
import Filter from "../components/Filter.vue";
import {ref} from 'vue';
import { RouterLink } from "vue-router";

let Foto = [
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9688589/pexels-photo-9688589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10154758/pexels-photo-10154758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17327539/pexels-photo-17327539/free-photo-of-boutique-butique-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11942868/pexels-photo-11942868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9688589/pexels-photo-9688589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10154758/pexels-photo-10154758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17327539/pexels-photo-17327539/free-photo-of-boutique-butique-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11942868/pexels-photo-11942868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9688589/pexels-photo-9688589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10154758/pexels-photo-10154758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17327539/pexels-photo-17327539/free-photo-of-boutique-butique-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11942868/pexels-photo-11942868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

let fotos = ref([
"https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9688589/pexels-photo-9688589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10154758/pexels-photo-10154758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17327539/pexels-photo-17327539/free-photo-of-boutique-butique-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11942868/pexels-photo-11942868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9688589/pexels-photo-9688589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10154758/pexels-photo-10154758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17327539/pexels-photo-17327539/free-photo-of-boutique-butique-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11942868/pexels-photo-11942868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9688589/pexels-photo-9688589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10154758/pexels-photo-10154758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17327539/pexels-photo-17327539/free-photo-of-boutique-butique-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11942868/pexels-photo-11942868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]);


</script>

<template>
  <main>
    <Anuncio />
    <Filter />
    <div class="container-card">
      <div class="box-card">
          <div class="card" v-for="items in fotos">
            <RouterLink to="/2">
              <img class="h-full w-full object-cover rounded-[10px]" :src="items" alt="">
            </RouterLink>
          </div>   
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
  padding-bottom: 10px;
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

<script setup>
import profileCard from "../components/profileCard.vue";
import Filter from "../components/Filter.vue";
import filterService from '../components/filterService.vue';
import filterLocal from '../components/filterLocal.vue';
import filterBody from '../components/filterBody.vue';
import { ref, onMounted } from "vue";
import axios from "axios";
/*import axios from 'axios';

function checarAcesso() {
  const token = localStorage.getItem("Token");

  const axiosConfig = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  // Enviar o token no corpo da solicitação POST
  axios.post('http://localhost:3000/', {}, axiosConfig)
    .then(response => {
      console.log(response.config.headers.Authorization);
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
    });
}
onMounted(() => {
  checarAcesso();
})*/

function titlePage() {
  axios.post('http://localhost:3000/')
    .then(res => {
      document.title = res.data.page;
    }).catch(error => console.error(`Deu error: ${error}`))
}
onMounted(() => {
  titlePage();
})

var clicou = ref(false);


function clicouBtn() {
  clicou.value = !clicou.value;
}
</script>
<template>
  <section>
    <div class="container-banner">
      <div class="box-banner"></div>
    </div>
  </section>

  <section>
    <div class="container-filter-gen">
      <div class="box-filter-gen">
        <Filter />
        <div class="">
          <button @click="clicouBtn"
            class="bg-[#ffffff] text-black border-[1px] border-[#ddd] font-normal rounded-[3px] pr-[15px] pl-[15px] pt-[3px] pb-[3px]">
            <i class="pr-1.5 ri-equalizer-line"></i>Filtrar
          </button>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-card-profile">
      <div class="container-filter" v-if="clicou == true">
        <filterService />
        <filterBody />
        <filterLocal />
      </div>
      <profileCard />
    </div>
  </section>
</template>
<style scoped>
.container-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.box-banner {
  background: black;
  height: 350px;
  width: 800px;
  border-radius: 12px;
}

.container-filter-gen {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
}

.box-filter-gen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}


.container-card-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  height: auto;
  width: auto;
  gap: 5px;
  padding-top: 0;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.container-filter {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  height: auto;
  width: 100%;
  padding: 0 40px;
}

@media screen and (max-width:990px) {
  .container-filter-gen {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    padding-bottom: 10px;
  }

  .box-filter-gen {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
}

@media screen and (max-width:640px) {
  .container-banner {
    padding: 0px;
    padding-bottom: 10px;
  }

  .box-banner {
    background-image: url("https://images.pexels.com/photos/159886/pexels-photo-159886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 180px;
    width: 100%;
    border-radius: 0px;
  }
}
</style>

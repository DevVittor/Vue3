<script setup>
import profileCard from "../components/profileCard.vue";
import Filter from "../components/Filter.vue";
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

function abrirModal() {
  document.body.style.overflow = 'hidden';
}
function fecharModal() {
  document.body.style.overflow = 'auto';
}

function clicouBtn() {
  if (clicou.value == true) {
    fecharModal();
  } else {
    abrirModal()
  }
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
  <section v-if="clicou == true">
    <div class="container-filter">
      <div class="bg-white h-auto gap-3 w-auto p-5 rounded-lg flex flex-col">
        <div class="flex justify-between items-center">
          <div class="">
            <h2 class="text-black font-medium text-[24px]">Filtrar Pesquisa</h2>
          </div>
          <div class="">
            <button @click="clicouBtn"><i class="text-red-500 text-[32px] ri-close-fill"></i></button>
          </div>
        </div>
        <div class="flex items-start bg-red-500 h-[300px] w-full">
          <div class="flex justify-center items-center gap-3">
            <div
              class="border-[1px] border-[#ddd] rounded-[3px] flex gap-2 items-center bg-white pr-2.5 pl-2.5 pt-1.5 pb-1.5">
              <i class="text-black ri-search-line"></i>
              <input class="outline-none text-black" type="text" name="" id="" placeholder="Buscar por nome">
            </div>
            <div class="">
              <select name="" id=""
                class="border-[1px] border-[#ddd] rounded-[3px] pr-2.5 pl-2.5 pt-1.5 pb-1.5 bg-white text-gray-500 outline-none">
                <option value="" selected disabled hidden>Gênero</option>
                <option value="">Mulher</option>
                <option value="">Homem</option>
                <option value="">Trans</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center bg-white h-auto w-full ">
          <div class="">
            <button
              class="bg-red-500 text-white pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] border-[1px] border-[#ddd] text-[16px] font-normal"><i
                class="text-white text-[20px] pr-1.5 ri-close-fill"></i>Desfazer</button>
          </div>
          <div class="">
            <button
              class="bg-blue-500 text-white pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] border-[1px] border-[#ddd] text-[16px] font-normal">Salvar<i
                class="text-[20px] pl-1.5 text-green-500 ri-checkbox-circle-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-card-profile">
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

.container-filter {
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(12px);
  top: 0;
  color: white;
}

.container-card-profile {
  height: auto;
  width: auto;
  gap: 5px;
  padding-top: 0;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
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

<script setup>
import profileCard from "../components/profileCard.vue";
import Filter from "../components/Filter.vue";
import { ref } from "vue";
import axios from "axios";
import { isTokenValid } from '../api/auth'; // Importe sua função de verificação
import jwt_decode from "jwt-decode";

var token = localStorage.getItem('token');
console.log(token);

/*{
  function createdd() {
    const token = localStorage.getItem('token');

    if (!isTokenValid(token)) {
      // Token inválido, redirecione para a página de login ou tome alguma ação
      this.$router.push('/login');
    } else {
      // Token válido, continue com as operações permitidas
    }
  }
};*/






axios
  .get("http://localhost:8080/")
  .then((res) => {
    console.log(res.data);
    /*const token = res.data.token;
    document.write(token)
    localStorage.setItem("Token", `${token}`)*/
  })
  .catch((error) => console.error(error));

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
        <div>
          <button @click="clicouBtn" class="bg-white font-semibold pr-[15px] pl-[15px] pt-[3px] pb-[3px]">
            <i class="pr-1.5 ri-equalizer-line"></i>Filtrar
          </button>
        </div>
      </div>
    </div>
  </section>
  <section v-if="clicou == true">
    <div class="flex justify-center items-center pb-3 pr-[40px] pl-[40px] w-full">
      <div class="h-auto bg-[#f9f9f9] w-full p-3">
        <div>
          <input type="text" name="" value="" placeholder="Quem você quer achar ?" />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-card-profile">
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
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
  background: white;
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
  width: 100%;
}

.container-card-profile {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  height: 100%;
  width: auto;
  padding-top: 0;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

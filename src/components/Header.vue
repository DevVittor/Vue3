<script setup>
import { RouterLink } from "vue-router";
//import IconProfile from "./iconProfile.vue";
</script>
<template>
  <header class="">
    <div class="container-menu">
      <div class="box-logo">
        <RouterLink :to="{ path: '/' }">
          <h1 class="">
            A<b class="">BR</b>IME
          </h1>
        </RouterLink>
        <!--<RouterLink to="/box">Perfil</RouterLink>-->
      </div>
      <div class="box-menu">
        <button class="btn-acessar">
          <RouterLink :to="{ path: '/acessar' }" class="text-black">Acessar</RouterLink>
        </button>
        <button class="btn-create">
          <RouterLink :to="{ path: '/cadastrar' }">Criar Conta</RouterLink>
        </button>
      </div>
      <!--<IconProfile />-->
    </div>
  </header>
</template>
<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: black;
  border-bottom: 1px solid rgb(17, 24, 39);
}

.container-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  width: 100%;
}

.box-logo h1 {
  font-size: 36px;
  font-weight: 600;
  color: white;
}

.box-logo b {
  color: #fe0;
}

.box-menu {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-acessar {
  background: white;
  padding: 3px 10px;
  border-radius: 5px;
}

.btn-create {
  background: #FE0000;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 3px 10px;
  font-weight: 600;
}

@media screen and (max-width: 1540px) {
  .container-menu {
    padding: 10px 40px;
  }
}

@media screen and (max-width: 640px) {
  .container-menu {
    flex-direction: column;
    padding: 10px 20px;
  }
}
</style>

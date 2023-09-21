<script setup>

import { RouterLink } from "vue-router";
//import IconProfile from "./iconProfile.vue";

</script>
<template>
  <header class="sticky top-0 z-50 border-b-[1px] border-gray-900 bg-black text-white">
    <div
      class="container-menu flex items-center sm:flex-row flex-col justify-between 2xl:pr-[50px] 2xl:p-[50px] pb-[20px] 2xl:pt-[10px] 2xl:pb-[10px] ">
      <div class="">
        <RouterLink to="/">
          <h1 class="text-[36px] font-semibold">
            A<b class="text-[#FE0]">BR</b>IME
          </h1>
        </RouterLink>
        <!--<RouterLink to="/box">Perfil</RouterLink>-->
      </div>
      <div class="flex items-center gap-3">
        <button class="border-[1px] border-white pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px]">
          <RouterLink to="/acessar" class="text-white">Acessar</RouterLink>
        </button>
        <button
          class="bg-[#FE0000] text-white border-[1px] border-transparent font-semibold pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px]">
          <RouterLink to="/register">Conta Gratuita</RouterLink>
        </button>
      </div>
      <!--<IconProfile />-->
    </div>

  </header>
</template>
<style scoped>
@media screen and (max-width:740px) {
  .container-menu {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
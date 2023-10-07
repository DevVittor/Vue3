<script setup>
import { RouterLink } from "vue-router";
//import IconProfile from "./iconProfile.vue";
</script>
<template>
  <header class="sticky top-0 z-50 bg-[#080b16] text-white">
    <div
      class="container-menu flex items-center sm:flex-row flex-col justify-between 2xl:pr-[50px] 2xl:p-[50px] pb-[20px] 2xl:pt-[10px] 2xl:pb-[10px]"
    >
      <div class="">
        <RouterLink :to="{ path: '/' }">
          <h1 class="text-[36px] font-semibold">
            A<b class="text-[#FE0]">BR</b>IME
          </h1>
        </RouterLink>
        <!--<RouterLink to="/box">Perfil</RouterLink>-->
      </div>
      <div class="flex items-center gap-3">
        <button class="bg-white pr-[10px] pl-[10px] pt-[3px] pb-[3px]">
          <RouterLink :to="{ path: '/acessar' }" class="text-black"
            >Acessar</RouterLink
          >
        </button>
        <button
          class="bg-[#FE0000] text-white border-[1px] md border-transparent font-semibold pr-[10px] pl-[10px] pt-[3px] pb-[3px]"
        >
          <RouterLink :to="{ path: '/publicar' }">Conta Gratuita</RouterLink>
        </button>
      </div>
      <!--<IconProfile />-->
    </div>
  </header>
</template>
<style scoped>
header {
  border-bottom: 1px solid rgb(17, 24, 39);
}
@media screen and (max-width: 1540px) {
  .container-menu {
    padding: 10px 40px;
  }
}

@media screen and (max-width: 740px) {
  .container-menu {
    flex-direction: column;
    gap: 10px;
  }
}
</style>

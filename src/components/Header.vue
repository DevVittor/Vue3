<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header class="sticky top-0 z-50 border-b-[1px] border-[#ddd] bg-white">
    <div
      class="flex items-center sm:flex-row flex-col pb-[10px] justify-between pt-[5px] sm:pb-[10px] pr-[50px] pl-[50px]"
    >
      <div class="">
        <RouterLink to="/"
          ><h1 class="text-[36px] font-semibold">
            A<b class="text-red-500">BR</b>IME
          </h1></RouterLink
        >
      </div>
      <div class="flex items-center gap-3">
        <button
          class="border-[1px] border-gray-500 pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px]"
        >
          <RouterLink to="/perfil" class="text-black">Acessar</RouterLink>
        </button>
        <button
          class="bg-red-500 text-white border-[1px] border-transparent font-semibold pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px]"
        >
          Conta Gratuita
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <section>
    <div
      class="flex justify-between 2xl:pr-[54px] 2xl:pl-[54px] lg:flex-row flex-col items-center md:pt-5 md:pb-5 md:pr-1.5 md:pl-1.5 p-3 gap-3">
      <div class="flex items-center gap-2">
        <button class="bg-white border-[1px] border-transparent  pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px]">
          <RouterLink to="/box"><i class="pr-1.5  fa-solid fa-venus"></i>Mulher | 3 mil</RouterLink>
        </button>
        <button class="bg-black border-[1px] border-white pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white">
          <i class="pr-1.5 text-white fa-solid fa-mars"></i>Homem | 243
        </button>
        <button class="bg-black border-[1px] border-white pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white">
          <i class="pr-1.5 text-white fa-solid fa-transgender"></i>Trans | 2 mil
        </button>
      </div>
      <div class="flex justify-center items-center gap-2">
        <div class="">
          <button class="bg-white pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px]">
            <i class="pr-1.5 ri-filter-line"></i>Filtrar
          </button>
        </div>
        <div class="">
          <select name="select" class="bg-white pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px] outline-none">
            <option value="destaque" selected>Destaque</option>
            <option value="verificada">Verificada</option>
            <option value="novidade">Novidade</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

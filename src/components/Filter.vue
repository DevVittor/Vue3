<script setup></script>
<template>
  <section>
    <div
      class="flex justify-between 2xl:pr-[54px] 2xl:pl-[54px] lg:flex-row flex-col items-center md:pt-5 md:pb-5 md:pr-1.5 md:pl-1.5 p-3 gap-3"
    >
      <div class="flex items-center gap-2">
        <button
          class="bg-blue-500 pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white"
        >
          <i class="pr-1.5 text-white fa-solid fa-venus"></i>Mulher
        </button>
        <button
          class="bg-blue-500 pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white"
        >
          <i class="pr-1.5 text-white fa-solid fa-mars"></i>Homem
        </button>
        <button
          class="bg-blue-500 pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white"
        >
          <i class="pr-1.5 text-white fa-solid fa-transgender"></i>Trans
        </button>
      </div>
      <div class="border-[1px] border-[#ddd] rounded-[3px]">
        <input
          class="pr-[10px] pl-[10px] pt-[5px] pb-[5px] outline-none"
          type="text"
          name=""
          id=""
          placeholder="Buscar"
        />
        <button class="pr-[10px] pl-[10px] pt-[5px] pb-[5px]" type="submit">
          <i class="ri-search-eye-line"></i>
        </button>
      </div>
      <div class="flex justify-center items-center gap-2">
        <div class="">
          <button
            class="border-[1px] bg-white border-gray-500 pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px]"
          >
            <i class="pr-1.5 ri-filter-line"></i>Filtrar
          </button>
        </div>
        <div class="">
          <select
            name="select"
            class="border-[1px] bg-white border-gray-500 pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px] outline-none"
          >
            <option value="destaque" selected>Destaque</option>
            <option value="verificada">Verificada</option>
            <option value="novidade">Novidade</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

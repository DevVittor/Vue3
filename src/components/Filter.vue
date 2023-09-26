<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isActive = ref('mulher');
const setActiveButton = (button) => {
  isActive.value = button;
};
</script>

<template>
  <section>
    <div
      class="flex justify-between 2xl:pr-[54px] 2xl:pl-[54px] lg:flex-row flex-col items-center md:pt-5 md:pb-5 md:pr-1.5 md:pl-1.5 p-3 gap-3">
      <div class="flex items-center gap-2">
        <button :class="{ active: isActive === 'mulher' }" @click="setActiveButton('mulher')">
          <i class="fa-solid fa-venus"></i>Mulher | 3 mil
        </button>
        <button :class="{ active: isActive === 'homem' }" @click="setActiveButton('homem')" class="">
          <i class="fa-solid fa-mars"></i>Homem | 243
        </button>
        <button :class="{ active: isActive === 'trans' }" @click="setActiveButton('trans')" class="">
          <i class="fa-solid fa-transgender"></i>Trans | 2 mil
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
  </section>
</template>

<style scoped>
.active {
  background: white;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 3px;
  color: #000;
}

.active i {
  color: #000;
  padding-right: 5px;
}

button:not(.active) {
  background: #000;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
}

button:not(.active) i {
  padding-right: 5px;
}
</style>

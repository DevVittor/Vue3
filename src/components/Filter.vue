<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isActive = ref("mulher");
const setActiveButton = (button) => {
  isActive.value = button;
};
</script>

<template>
  <div class="flex justify-between lg:flex-row flex-col items-center gap-3">
    <div class="flex items-center gap-2">
      <button
        :class="{ active: isActive === 'mulher' }"
        @click="setActiveButton('mulher')"
      >
        <i class="fa-solid fa-venus"></i>Mulher | 3 mil
      </button>
      <button
        :class="{ active: isActive === 'homem' }"
        @click="setActiveButton('homem')"
        class=""
      >
        <i class="fa-solid fa-mars"></i>Homem | 243
      </button>
      <button
        :class="{ active: isActive === 'trans' }"
        @click="setActiveButton('trans')"
        class=""
      >
        <i class="fa-solid fa-transgender"></i>Trans | 2 mil
      </button>
    </div>
  </div>
</template>

<style scoped>
.active {
  background: white;
  border: 1px solid white;
  padding: 5px 10px;
  color: #000;
}

.active i {
  color: #000;
  padding-right: 5px;
}

button:not(.active) {
  background: #080b16;
  border: 1px solid white;
  padding: 5px 10px;
  color: white;
}

button:not(.active) i {
  padding-right: 5px;
}
</style>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const isActive = ref("mulher");
const setActiveButton = (button) => {
  isActive.value = button;
};
/*function category() {
  if (isActive.value == "mulher") {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  } else if (isActive.value == "homem") {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  } else {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }
}
onMounted(() => {
  category();
});*/
</script>

<template>
  <div class="flex justify-between lg:flex-row flex-col items-center gap-3">
    <div class="flex items-center gap-2">
      <button :class="{ active: isActive === 'mulher' }" @click="
        setActiveButton('mulher');
      category('Mulher');
      ">
        <i class="fa-solid fa-venus"></i>Mulher | 3 mil
      </button>
      <button :class="{ active: isActive === 'homem' }" @click="
        setActiveButton('homem');
      category('Homem');
      " class="">
        <i class="fa-solid fa-mars"></i>Homem | 243
      </button>
      <button :class="{ active: isActive === 'trans' }" @click="
        setActiveButton('trans');
      category('Trans');
      " class="">
        <i class="fa-solid fa-transgender"></i>Trans | 2 mil
      </button>
    </div>
  </div>
</template>

<style scoped>
.active {
  background: #000;
  border: 1px solid #000;
  padding: 5px 10px;
  color: #FFFFFF;
}

.active i {
  color: #FFFFFF;
  padding-right: 5px;
}

button:not(.active) {
  background: #FFFFFF;
  border: 1px solid #000;
  padding: 5px 10px;
  color: #000;
}

button:not(.active) i {
  padding-right: 5px;
}
</style>

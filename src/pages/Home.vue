<script setup>
import Anuncio from "../components/Anuncio.vue";
import Content from "../components/Content.vue";
import Cookie from "../components/Cookie.vue";
import Filter from "../components/Filter.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';

let open = ref(false);

function abrirModal() {
  open.value = true;
  document.body.style.overflow = 'hidden';
}
function fecharModal() {
  open.value = false;
  document.body.style.overflow = 'auto';
}

</script>

<template>
  <main>
    <section>
      <div class="popup">
        <h1>Vue 3 Modal!</h1>
        <button class="bg-black pr-[20px] pl-[20px] pt-[5px] pb-[5px] text-white rounded-md" @click="abrirModal">Open
          Modal</button>
        <div class="modal-div" v-if="open">
          <div class="modal">
            <div class="btn-closed">
              <button @click="fecharModal"><i class="text-red-500 fa-solid fa-xmark"></i></button>
            </div>
            <div class="">
              <h3>Esse modal está aberto</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Anuncio />
    <Filter />
    <Content />
    <Cookie />
  </main>
</template>
<style scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: white !important;
}

.popup h1 {
  font-size: 36px;
  font-weight: 700;
}

.modal-div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(12px);
  color: white;
  padding: 10px;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  background: white;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}


.modal h3 {
  font-size: 24px;
  font-weight: 700;
}

.btn-closed {
  position: absolute;
  margin-top: -60px;
}

.btn-closed i {
  font-size: 32px;
}

/*.modal button {
  padding: 3px 20px;
  border-radius: 3px;
  background: black;
  color: white;
  font-size: 16px;
  font-weight: 600;
}*/
</style>

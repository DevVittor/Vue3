<script setup>

import Home from './components/Home.vue'
import {ref} from 'vue'

import Header from './components/Header.vue'

const count = ref(0)

function plus(){
  count.value++
}
function minus(){
  count.value > 0 ? count.value-- : count.value
}

</script>

<template>
  <Header/>
  <div>
    <Home/>
    <div class="box-count">
      <h2>{{ count }}</h2>
    </div>
    <div class="btns-count">
      <button @click="minus">-</button>
      <button @click="plus">+</button>
    </div>
  </div>
</template>

<style scoped>
.box-count{
  display: flex;
  justify-content: center;
  align-items: center;
}
.btns-count{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
}
.btns-count button{
  padding: 5px 10px;
  border-radius: 3px;
  background: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
</style>

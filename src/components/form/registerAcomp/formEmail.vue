<script setup></script>
<template>
  <div class="container-email">
    <label for="">Email: </label>
    <div class="box-email">
      <input type="email" name="" id="" placeholder="Digite seu email" />
    </div>
  </div>
</template>
<style scoped>
.container-email {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.box-email {
  display: flex;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.box-email input {
  outline: none;
}
</style>

<script setup></script>
<template>
  <div class="container-contact">
    <label for=""> Celular/Whatsapp: </label>
    <input type="text" placeholder="(xx)xxxxxx-xxx" />
  </div>
</template>
<style scoped>
.container-contact {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.container-contact input[type="text"] {
  padding: 3px 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
}
</style>

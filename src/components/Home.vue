<script setup>

</script>

<template>
  <div class="container-home">
    <h1>Página Inicial</h1>
  </div>
</template>

<style scoped>
.container-home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
@media screen and (max-width:640px) {
    .container-home{
      height: auto;
      padding: 10px;
    }
}
</style>

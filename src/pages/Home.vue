<script setup>
document.title = 'Home'
const img = "https://images.pexels.com/photos/18182289/pexels-photo-18182289/free-photo-of-fotografia-aerea-aerofotografia-esteril-improdutivo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
</script>

<template>
  <main>
    <section>
      <div class="container-banner">
        <div class="box-banner">
          <img :src="img" alt="">
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container-banner{
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-banner{
  height: 550px;
  width: 100%;
  background: red;
}
.box-banner img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width:640px) {
    .container-home{
      height: auto;
      padding: 10px;
    }
    .box-banner{
      height: 200px;
    }
}
</style>

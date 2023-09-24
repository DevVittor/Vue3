<script setup>
import { ref, onMounted } from 'vue';
const fotos = ref([
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9688589/pexels-photo-9688589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10154758/pexels-photo-10154758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17327539/pexels-photo-17327539/free-photo-of-boutique-butique-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11942868/pexels-photo-11942868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]);

let currentIndex = 0;

const maxImg = fotos.value.length;

const currentImage = ref(fotos.value[currentIndex]);

onMounted(() => {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % maxImg;
        currentImage.value = fotos.value[currentIndex];
    }, 5000);
});

</script>
<template>
    <section>
        <div class="container">
            <div class="box">
                <img :src="currentImage">
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    width: 100%;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box img {
    height: 350px;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
}
</style>
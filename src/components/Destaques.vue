<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
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
</script>
<template>
    <section>
        <div class="slider">
            <div class="slider-track">
                <div class="slide" v-for="(itens, index) in  fotos " :key="index">
                    <RouterLink to="/2">
                        <img :src="itens" :alt="'Imagem' + index">
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.slider {
    position: relative;
    overflow: hidden;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    margin: auto;
}

.slider-track {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide img:hover {
    cursor: pointer;
}

.slide img {
    height: 350px;
    object-fit: cover;
    min-width: 100px;
    width: auto;
    max-width: 600px;
    border-radius: 5px;
}

.slider-track:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    from {
        transform: translateX(0px);
    }

    to {
        transform: translateX(-100%);
    }
}

.slider-track {
    animation-name: scroll;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    display: flex;
    width: 960px;
}

@media screen and (max-width:640px) {
    .slide img {
        height: 250px;
    }

    .slider-track {
        width: 100%;
    }
}
</style>
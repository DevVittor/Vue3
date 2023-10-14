<template>
    <img id="image" :src="currentImage" alt="Image" @mouseenter="pauseSlider" @mouseleave="resumeSlider" />
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        const index = ref(0);
        const arrayImage = [
            "https://images.pexels.com/photos/17140100/pexels-photo-17140100/free-photo-of-desfiladeiro-canion-deserto-formacoes-rochosas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/14945927/pexels-photo-14945927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/12178693/pexels-photo-12178693.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            "https://images.pexels.com/photos/8909687/pexels-photo-8909687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2404298/pexels-photo-2404298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ];
        const intervalId = ref(null);

        const currentImage = ref(arrayImage[index.value]);

        const nextImage = () => {
            index.value = (index.value + 1) % arrayImage.length;
            currentImage.value = arrayImage[index.value];
        };

        const startSlider = () => {
            intervalId.value = setInterval(nextImage, 5000);
        };

        const pauseSlider = () => {
            clearInterval(intervalId.value);
        };

        const resumeSlider = () => {
            startSlider();
        };

        onMounted(() => {
            startSlider();
        });

        onBeforeUnmount(() => {
            clearInterval(intervalId.value);
        });

        return {
            currentImage,
            pauseSlider,
            resumeSlider,
        };
    },
};
</script>
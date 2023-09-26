<script setup>
//import axios from "axios";
import { ref, watch } from 'vue';

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
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "https://images.pexels.com/photos/3194076/pexels-photo-3194076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12811157/pexels-photo-12811157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11741234/pexels-photo-11741234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258910/pexels-photo-8258910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14354554/pexels-photo-14354554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]);

let modal = ref(false);
let imgModal = ref('');
let indexModal = ref('');
function modalImg(imagem, index) {
    imgModal.value = imagem;
    indexModal.value = index;
    modal.value = true;
    document.body.style.overflow = 'hidden';
}

function closeModalImg() {
    modal.value = false;
}

watch(modal, (newValue) => {
    if (!newValue) {
        document.body.style.overflow = 'auto';
    }
});

/*axios.get('http://localhost:8080/')
    .then(res => {
        fotos.value = res.data.fotos;
    }).catch(error => console.error(error));
*/


</script>
<template>
    <section>
        <div className="m-auto w-full 2xl:columns-6 lg:columns-4 columns-2 gap-2 p-2">
            <div v-for="(imagens, index) in fotos" className="mb-2.5 w-full break-inside-avoid">
                <img @click="modalImg(imagens, index)" className="max-w-full cursor-pointer rounded-md" :src="imagens"
                    :alt="index" />

            </div>
        </div>
    </section>
    <section v-if="modal">
        <div class="container-modal">
            <div class="box-modal">
                <button @click="closeModalImg" class=" text-white"><i class="pr-1.5 ri-close-fill"></i>Fechar</button>
                <img :src="imgModal" :alt="indexModal">
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-modal {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: end;
    backdrop-filter: blur(8px);
}

.box-modal {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    padding: 10px;
    height: 85%;
}

.box-modal button {
    height: 40px;
    width: auto;
    background: red;
    font-size: 16px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 3px;
}


.box-modal img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
}

@media screen and (max-width:500px) {
    .box-modal img {
        height: auto;
        max-height: 400px;
    }
}
</style>
<script setup>
import axios from "axios";
import { ref } from 'vue';

const fotos = ref([]);

axios.get('http://localhost:8080/')
    .then(res => {
        fotos.value = res.data.fotos;
    }).catch(error => console.error(error));

</script>
<template>
    <section>
        <div className="m-auto w-full  2xl:columns-6 lg:columns-4 columns-2 gap-3 p-3">
            <div v-for="imagens in fotos" className="mb-2.5 w-full break-inside-avoid">
                <img className="max-w-full rounded-md" :src="imagens" alt="" />
            </div>
        </div>
    </section>
</template>
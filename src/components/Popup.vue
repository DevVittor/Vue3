<script setup>
import { ref } from 'vue';

let open = ref(false);

function abrirModal() {
    open.value = true;
    document.body.style.overflow = 'hidden';
}
function fecharModal() {
    open.value = false;
    document.body.style.overflow = 'auto';
}
</script>
<template>
    <section>
        <div class="popup">
            <h1>Vue 3 Modal!</h1>
            <button class="bg-black pr-[20px] pl-[20px] pt-[5px] pb-[5px] text-white rounded-md" @click="abrirModal">Open
                Modal</button>
            <div class="modal-div" v-if="open">
                <div class="modal">
                    <div class="btn-closed">
                        <button @click="fecharModal"><i class="text-red-500 fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="">
                        <h3>Esse modal está aberto</h3>
                        <img class="h-[400px] w-full object-cover"
                            src="https://images.pexels.com/photos/2467394/pexels-photo-2467394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background: white !important;
}

.popup h1 {
    font-size: 36px;
    font-weight: 700;
}

.modal-div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(12px);
    color: white;
    padding: 10px;
}

.modal {
    transition: all ease-in .4s;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: auto;
    gap: 10px;
    background: white;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}


.modal h3 {
    font-size: 24px;
    font-weight: 700;
}

.btn-closed {
    position: relative;
    color: red;
}

.btn-closed i {
    font-size: 32px;
    color: red;
}
</style>
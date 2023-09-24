<script setup>
import { ref, onMounted } from 'vue';

let ImagemAtual = "https://images.pexels.com/photos/15488686/pexels-photo-15488686/free-photo-of-carro-veiculo-automovel-arranjo-de-flores.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let Nome = ref("Nome Completo");
let Idade = ref("Idade");
let Estado = ref("Estado");
let Cidade = ref("Rj");
let Valor = ref("Valor");
let Sexo = ref("Sexo");

</script>
<template>
    <main>
        <section>
            <div class="flex gap-3 justify-center items-start">
                <div class="flex justify-center items-center">
                    <div class="box-form">
                        <form action="" method="post">
                            <div class="flex flex-col gap-3">
                                <div>
                                    <label class="input_file" for="arquivo"><i
                                            class="pr-1.5 ri-upload-cloud-fill"></i>Enviar Foto</label>
                                    <input type="file" name="arquivo" id="fileInput" @change="handleFileChange">
                                </div>
                                <input class="border-[1px] border-[#ddd] p-[5px]" type="text" name="" id="inputName"
                                    placeholder="Nome Completo" v-model="Nome">
                                <input class="border-[1px] border-[#ddd] p-[5px]" type="text" name="" id=""
                                    placeholder="Sua Idade" v-model="Idade">
                                <input class="border-[1px] border-[#ddd] p-[5px]" type="text" name="" id=""
                                    placeholder="Estado" v-model="Estado">
                                <input class="border-[1px] border-[#ddd] p-[5px]" type="text" name="" id=""
                                    placeholder="Valor Hora" v-model="Valor">
                                <select class="border-[1px] border-[#ddd] p-[5px] bg-white" v-model="Sexo">
                                    <option value="" selected hidden>Sexo</option>
                                    <option>Mulher</option>
                                    <option>Homem</option>
                                    <option>Trans</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="container-card">
                    <div class="box-result-form">
                        <img :src="ImagemAtual" alt="">
                        <div class="absolute h-[500px] w-[320px] flex flex-col justify-between items-center">
                            <div class="h[200px] w-full flex justify-end">
                                <h2 class="text-white bg-blue-500 pr-[10px] pl-[10px] pt-[3px] pb-[3px] font-semibold ">
                                    R$ {{ Valor }}/H
                                </h2>
                            </div>
                            <div class="form-name">
                                <div class="">
                                    <h2><i class="text-green-500 pr-1.5 ri-shield-check-fill"></i>{{ Nome }}, {{ Idade }}
                                    </h2>
                                </div>
                                <div class="">
                                    <span><i class="pr-1.5 text-red-500 ri-map-pin-user-fill"></i>{{ Estado }} | {{ Sexo
                                    }}</span>
                                </div>
                                <div class="">
                                    <button><i class="pr-1.5 ri-eye-fill"></i>Ver mais</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="flex items-center justify-center gap-5 pb-5">
                <div class="bg-white h-[100px] w-[100px] rounded-md flex flex-col justify-center items-center gap-[8px]">
                    <i class="text-[36px] fa-solid fa-id-badge"></i>
                    <h3 class="text-[18px] font-medium">Perfil</h3>
                </div>
                <div class="bg-white h-[100px] w-[100px] rounded-md flex flex-col justify-center items-center  gap-[8px]">
                    <i class="text-[36px] fa-solid fa-images"></i>
                    <h3 class="text-[18px] font-medium">Galeria</h3>
                </div>
                <div class="bg-white h-[100px] w-[100px] rounded-md flex flex-col justify-center items-center  gap-[8px]">
                    <i class="text-[36px] fa-solid fa-file-video"></i>
                    <h3 class="text-[18px] font-medium">Vídeo</h3>
                </div>
                <div class="bg-white h-[100px] w-[100px] rounded-md flex flex-col justify-center items-center  gap-[8px]">
                    <i class="text-[36px] fa-solid fa-child-reaching"></i>
                    <h3 class="text-[18px] font-medium">Corpo</h3>
                </div>
                <div class="bg-white h-[100px] w-[100px] rounded-md flex flex-col justify-center items-center  gap-[8px]">
                    <i class="text-[36px] fa-solid fa-bell-concierge"></i>
                    <h3 class="text-[18px] font-medium">Serviços</h3>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
main {
    height: 92.2vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 20px 0;
}

#fileInput {
    display: flex;
    flex-direction: column;
}

.container-card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    height: auto;
    padding: 20px 40px;
    background: white;
    border-radius: 5px;
}

.box-result-form {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 500px;
    width: 320px;
}

.input_file {
    border: 1px dashed blue;
    padding: 8px 20px;
    cursor: pointer;
}

.box-result-form img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

/*.box-result-form:hover .form-name {
    opacity: 1;
    transition: all ease-in .2s;
}*/

.form-name {
    /*opacity: 0;*/
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3px;
    color: white;
    font-weight: 600;
    height: auto;
    padding: 10px 15px;
    max-height: 150px;
    width: 320px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    transition: all ease-out .2s;
}

.form-name button {
    background: black;
    color: white;
    padding: 3px 15px;
    border-radius: 3px;
}
</style>
<script setup>
import Services from './Services.vue';
import { ref, onMounted } from 'vue';
const alturaDaPagina = ref(window.innerHeight - 126 + "px");

onMounted(() => {
    // Atualizar a altura quando a janela for redimensionada
    window.addEventListener("resize", () => {
        alturaDaPagina.value = window.innerHeight - 126 + "px";
    });
});
</script>
<template>
    <section>
        <div class="flex justify-center items-center " :style="{ height: alturaDaPagina }">
            <div class="flex justify-center flex-col gap-3 h-full w-[650px] container-info-profile pt-5 pb-5 pr-10 pl-10 ">
                <div>
                    <nav>
                        <ul
                            class="flex text-white justify-center flex-wrap items-center gap-3 bg-black rounded-[3px] pr-[10px] pt-[3px] pb-[3px] pl-[10px]">
                            <li class=" font-normal"><i
                                    class="pr-1.5 text-[20px] text-blue-500 ri-verified-badge-fill"></i>Profissional</li>
                            <li class="font-normal"><i
                                    class="text-red-500 text-[20px] pr-1.5 ri-flashlight-fill"></i>Destaque</li>
                            <li class="font-normal"><i
                                    class="text-[20px] pr-1.5 text-green-500 ri-shield-check-fill"></i>Perfil Verificado
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="w-full justify-center flex items-center gap-[10px]">
                    <h4 class="text-whitefont-medium text-[18px]">Rio de Janeiro, Rj</h4>
                    <hr class="w-[70px] border-[2px] border-black">
                    <h4 class="text-whitefont-medium text-[18px]">(21) 998742-102</h4>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="">
                        <div class="">
                            <h2 class=" text-[64px] leading-[60px] font-extrabold">Jéssica <b class="pl-[50px]">Gomes</b>
                            </h2>
                        </div>
                    </div>
                    <div class="w-full justify-end flex items-center gap-[10px]">
                        <h4 class="text-whitefont-medium text-[18px]">Mulher</h4>
                        <hr class="w-[70px] border-[2px] border-black">
                        <h4 class="text-whitefont-medium text-[18px]">32 anos</h4>
                    </div>


                </div>
                <div class="">
                    <p class=" text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perspiciatis
                        placeat hic
                        error, veniam
                        natus ipsum labore vitae facilis aliquam harum cumque illum consectetur in. Quibusdam, est iure!
                        Dolorum, molestiae quasi!</p>
                </div>
                <div
                    class="bg-black text-white pt-[15px] pb-[15px] pr-[30px] pl-[30px] w-full rounded-[12px] flex gap-2 justify-center items-center flex-col">
                    <div class="flex justify-center items-center w-[100%]">
                        <h2 class="text-[44px] font-extrabold">R$ 250/<span
                                class="text-[16px] text-gray-400 font-normal">Hora</span></h2>
                    </div>
                    <div class=" flex items-center justify-center">
                        <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
                            quam?</p>
                    </div>
                    <div>
                        <nav>
                            <ul
                                class="flex flex-wrap justify-center items-center gap-3  rounded-md pr-[10px] pt-[3px] pb-[3px] pl-[10px]">
                                <li class=" font-normal">
                                    <i class="pr-1.5 text-[20px] fa-solid fa-money-bill"></i>
                                    Dinheiro
                                </li>
                                <li class="font-normal"><i class="pr-1.5 text-[20px] fa-brands fa-pix"></i>Pix
                                </li>
                                <li class="font-normal"><i class="pr-1.5 text-[20px] fa-regular fa-credit-card"></i>Cartão
                                    de
                                    Crédito
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="bg-black h-[220px] w-full rounded-md flex justify-center items-center">
                    <h1 class="text-[20px] text-white font-semibold">Anunciante</h1>
                </div>
            </div>
            <div class="h-full w-full flex flex-col gap-5 justify-between items-center  ">
                <Services />
                <div class="box-img flex flex-col items-end justify-center h-auto max-h-[600px] min-w-[400px] max-w[800px]">
                    <img class="h-full w-full object-contain rounded-[3px]"
                        src="https://images.pexels.com/photos/6221432/pexels-photo-6221432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="">
                </div>
                <Services />
            </div>

        </div>

    </section>
</template>
<style scoped>
.container-info-profile {
    border-right: 1px solid #ddd;
}

.box-img {
    border-radius: 3px;
}

.box-img img {
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}
</style>
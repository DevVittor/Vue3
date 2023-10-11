<script setup>
import Services from './Services.vue';
import { ref, onMounted } from 'vue';
const alturaDaPagina = ref(window.innerHeight - 170 + "px");

onMounted(() => {
    // Atualizar a altura quando a janela for redimensionada
    window.addEventListener("resize", () => {
        alturaDaPagina.value = window.innerHeight - 170 + "px";
    });
});
</script>
<template>
    <Services />
    <section>
        <div class="flex justify-center items-center " :style="{ height: alturaDaPagina }">
            <div class="flex justify-start flex-col gap-5 h-full w-[800px] container-info-profile p-10 ">
                <div class="bg-white h-[40px] w-auto flex items-center gap-3 rounded-full pt-2 pb-2 pr-5 pl-2">
                    <div class="bg-[#080b16] h-[30px] w-[30px] rounded-full flex items-center justify-center">
                        <i class="text-[16px] font-medium text-white  ri-map-pin-line"></i>
                    </div>
                    <div>
                        <h2>Rio de Janeiro, Rj</h2>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="text-white">
                        <h2 class="text-[64px] font-extrabold">Jéssica</h2>
                        <h2 class="relative text-[64px] font-extrabold top-[-35px] left-[40px] text-white">Gomes
                        </h2>
                    </div>
                    <div class="w-full justify-end text-white flex items-center gap-[10px] relative top-[-40px]">
                        <h4 class="text-whitefont-medium text-[18px]">Mulher</h4>
                        <hr class="w-[70px] border-[2px] border-white">
                        <h4 class="text-whitefont-medium text-[18px]">32 anos</h4>
                    </div>
                </div>
                <div class="flex  justify-center items-start gap-3 flex-wrap">
                    <div class="bg-white h-[40px] w-auto flex items-center gap-3 rounded-full pt-2 pb-2 pr-5 pl-2">
                        <div class="bg-[#080b16] h-[30px] w-[30px] rounded-full flex items-center justify-center">
                            <i class="text-[16px] font-medium text-white  ri-whatsapp-line"></i>
                        </div>
                        <div>
                            <h2>(21) 998541-108</h2>
                        </div>
                    </div>
                    <div class="bg-white h-[40px] w-auto flex items-center gap-3 rounded-full pt-2 pb-2 pr-5 pl-2">
                        <div class="bg-[#080b16] h-[30px] w-[30px] rounded-full flex items-center justify-center">
                            <i class="text-[16px] font-medium text-white ri-play-circle-line"></i>
                        </div>
                        <div>
                            <h2>Assistir o Video</h2>
                        </div>
                    </div>
                </div>
                <div class="">
                    <p class="text-white text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perspiciatis
                        placeat hic
                        error, veniam
                        natus ipsum labore vitae facilis aliquam harum cumque illum consectetur in. Quibusdam, est iure!
                        Dolorum, molestiae quasi!</p>
                </div>
                <div
                    class="bg-white pt-[20px] pb-[20px] pr-[30px] pl-[30px] w-full rounded-[12px] flex justify-center items-center flex-col">
                    <div class="flex justify-center items-center w-[100%]">
                        <h2 class="text-[44px] font-extrabold">R$ 250/<span
                                class="text-[16px] text-gray-800 font-normal">Hora</span></h2>
                    </div>
                    <div class=" flex items-center justify-center">
                        <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
                            quam?</p>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul class="flex justify-center flex-wrap items-center gap-3 text-white font-medium">
                            <li><span>Dinheiro</span></li>
                            <li><span>Pix</span></li>
                            <li><span>Cartão de Crédito</span></li>
                            <li><span>Cartão de Débito</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="h-full w-full flex flex-col gap-5 justify-center items-center ">
                <div class="flex items-center justify-center h-auto max-h-[600px] min-w-[400px] max-w[800px]">
                    <img class="h-full w-full object-contain rounded-md"
                        src="https://images.pexels.com/photos/3209624/pexels-photo-3209624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="">
                </div>
                <div class="w-auto p-[10px] h-[60px] rounded-full bg-red-500 flex justify-center items-center gap-3">
                    <div class="bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
                        <i class="text-[28px] text-blue-500 ri-verified-badge-fill"></i>
                    </div>
                    <div class="bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
                        <i class="text-red-500 text-[28px] ri-flashlight-fill"></i>
                    </div>
                    <div class="bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
                        <i class="text-[28px] text-green-500 ri-shield-check-fill"></i>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul class="flex items-center gap-3">
                            <li class="text-white font-medium"><i
                                    class="pr-1.5 text-[20px] text-blue-500 ri-verified-badge-fill"></i>Profissional</li>
                            <li class="text-white font-medium"><i
                                    class="text-red-500 text-[20px] pr-1.5 ri-flashlight-fill"></i>Destaque</li>
                            <li class="text-white font-medium"><i
                                    class="text-[20px] pr-1.5 text-green-500 ri-shield-check-fill"></i>Perfil Verificado
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="container-info-data flex justify-center items-center flex-col gap-3 h-full w-[600px] p-3">
                <div class="h-[250px] w-[250px] flex justify-center items-center bg-white rounded-md">
                    <h2 class="text-[24px]">Corpo</h2>
                </div>
                <div class="h-[250px] w-[250px] flex justify-center items-center bg-white rounded-md">
                    <h2 class="text-[24px]">Horários</h2>
                </div>
                <div class="h-[250px] w-[250px] bg-white rounded-md">
                    <iframe class="h-full w-full rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3672.093062526473!2d-43.45831!3d-23.020355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAxJzEzLjMiUyA0M8KwMjcnMjkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1696998119567!5m2!1spt-BR!2sbr"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-info-profile {
    border-right: 1px solid rgb(17, 24, 39);
}

.container-info-data {
    border-left: 1px solid rgb(17, 24, 39);
}
</style>
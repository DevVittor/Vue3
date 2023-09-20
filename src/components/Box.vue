<script setup>
import Content from './Content.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const list = ref(["Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal", "Casal",]);

</script>
<template>
    <main>

        <section>
            <div class="flex items-center p-10 gap-5">
                <div class="flex flex-col  bg-black text-white gap-2">
                    <div class="">
                        <button class="bg-black text-white font-semibold text-[17px] rounded-md"><i
                                class="pr-1.5 text-blue-500 ri-shield-check-fill"></i>Perfil Verificado</button>
                    </div>
                    <div class="flex items-center gap-3">
                        <img class="h-[50px] w-[50px] object-cover rounded-full"
                            src="https://images.pexels.com/photos/15702743/pexels-photo-15702743/free-photo-of-lindo-bonito-atraente-elegante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="">
                        <h2 class="text-[44px] font-semibold">Fernanda Lima, 35</h2>
                    </div>
                    <div class="flex items-center gap-3">
                        <h4 class="text-[18px] font-medium"><i class="pr-1.5 text-[#FE0000] ri-map-pin-fill"></i>Rio de
                            Janeiro, RJ</h4>
                        <span>|</span>
                        <span><i class="pr-1.5 ri-women-line"></i>Mulher</span>
                    </div>
                    <div class="w-[700px]">
                        <p class="text-[16px] font-light leading-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure optio blanditiis ipsa corporis earum reiciendis itaque dolor magni fugiat?
                            Reprehenderit molestiae enim laudantium, doloremque ullam quo odit dolores fugiat tempora ea sed
                            animi quaerat illum omnis quod velit unde. Fugiat maxime mollitia officia voluptatibus
                            aspernatur consequuntur totam reiciendis recusandae minus porro, nemo dignissimos laboriosam
                            quidem, illum dicta. Mollitia soluta non odio aliquam, sequi fuga maiores vitae ipsum commodi ex
                            asperiores et nostrum officia quae alias eaque, labore expedita praesentium autem eum qui cum
                            dolore. Itaque ipsa similique consequuntur consequatur fugiat repudiandae explicabo harum
                            distinctio deserunt facilis! Quod quas architecto sit.</p>
                    </div>
                    <div class="flex items-center gap-3 pt-[10px]">
                        <div class="">
                            <button
                                class="bg-white text-black font-semibold text-[16px] pr-[20px] pl-[20px] pt-[5px] pb-[5px] rounded-[3px]">R$
                                250/H</button>
                        </div>
                        <div class="">
                            <button
                                class="bg-white text-black font-semibold text-[16px] pr-[20px] pl-[20px] pt-[5px] pb-[5px] rounded-[3px]"><i
                                    class="pr-1.5 fa-solid fa-bell-concierge"></i>Serviços</button>
                        </div>
                        <div class="">
                            <nav>
                                <ul class="flex items-center gap-3 text-[20px]">
                                    <li>
                                        <RouterLink to="/"><i class="ri-facebook-box-fill"></i></RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/"><i class="ri-instagram-fill"></i></RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/"><i class="ri-twitter-x-fill"></i></RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/"><i class="ri-whatsapp-fill"></i></RouterLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class=" w-full h-full flex justify-center">
                    <div class="flex items-start gap-5">
                        <div class="flex flex-col  gap-3 text-white ">
                            <button
                                class="bg-white text-black border-[1px] border-white font-medium pr-[20px] pl-[20px] pt-[3px] pb-[3px] rounded-[3px]"><i
                                    class="pr-1.5 fa-solid fa-image"></i>Vídeo</button>
                            <button
                                class="bg-black text-white border-[1px] border-white font-medium pr-[20px] pl-[20px] pt-[3px] pb-[3px] rounded-[3px]"><i
                                    class="pr-1.5 fa-solid fa-child-reaching"></i>Corpo</button>
                            <button
                                class="bg-black text-white border-[1px] border-white font-medium pr-[20px] pl-[20px] pt-[3px] pb-[3px] rounded-[3px]"><i
                                    class="pr-1.5 fa-regular fa-calendar-days"></i>Horários</button>
                            <button
                                class="bg-black text-white border-[1px] border-white font-medium pr-[20px] pl-[20px] pt-[3px] pb-[3px] rounded-[3px]"><i
                                    class="pr-1.5 fa-solid fa-map-pin"></i>Localização</button>
                            <button
                                class="bg-black text-white border-[1px] border-white font-medium pr-[20px] pl-[20px] pt-[3px] pb-[3px] rounded-[3px]"><i
                                    class="pr-1.5 fa-solid fa-hand-holding-dollar"></i>Formas de Pagamento</button>
                        </div>
                        <div class="">
                            <div class="h-[300px] w-[550px] bg-black rounded-md">
                                <iframe class="w-full h-full object-cover rounded-md"
                                    src="https://www.youtube.com/embed/laf64Ms0yV4" frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Content />
    </main>
</template>
<style scoped>
main {
    background: #000;
}
</style>
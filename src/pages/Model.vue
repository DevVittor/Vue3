<script setup>
import Cards from "../components/styleCard.vue";
import StyleCard from "../components/styleCard.vue";
import ListService from "../components/Services.vue";
</script>
<template>
    <main>
        <ListService />
        <section>
            <div class="flex justify-center items-center p-5">
                <div
                    class="flex justify-center items-start p-3 bg-white border-[1px] border-[#ddd] rounded-[10px] w-[800px] gap-3"
                >
                    <div class="h-[150px] w-[400px]">
                        <img
                            class="object-cover h-full w-[400px] rounded-full"
                            src="https://images.pexels.com/photos/2467394/pexels-photo-2467394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-3">
                                <h2 class="text-[20px] font-semibold">
                                    Aurora Cantora
                                </h2>
                                <i
                                    class="text-[24px] text-blue-500 ri-checkbox-circle-fill"
                                ></i>
                            </div>
                            <div class="flex items-center gap-3">
                                <button
                                    class="bg-blue-500 text-white font-semibold pr-[15px] pl-[15px] pt-[3px] pb-[3px] rounded-[3px]"
                                >
                                    R$ 250/H
                                </button>
                                <button
                                    class="bg-gray-500 text-white font-semibold pr-[20px] pl-[20px] pt-[3px] pb-[3px] rounded-[3px]"
                                >
                                    <i class="pr-1.5 ri-whatsapp-line"></i
                                    >Enviar Mensagem
                                </button>
                                <button
                                    class="bg-red-500 text-white font-semibold pt-[3px] pb-[3px] pr-[10px] pl-[10px] rounded-[3px]"
                                >
                                    <i
                                        class="text-[16px] ri-information-line"
                                    ></i>
                                </button>
                            </div>
                        </div>
                        <div class="">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Suscipit iste cum dignissimos
                                ducimus minima laboriosam voluptate accusantium
                                itaque, nulla nobis blanditiis perspiciatis
                                mollitia porro nesciunt sint deserunt ipsam ut
                                id?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="flex justify-center items-center">
                <div
                    class="flex justify-center items-center w-[70%] border-t-[1px] border-[#ddd] gap-3 p-5"
                >
                    <button
                        class="bg-black text-white font-semibold pr-[15px] pl-[15px] pt-[5px] pb-[5px] rounded-[3px]"
                    >
                        Fotos
                    </button>
                    <button
                        class="bg-black text-white font-semibold pr-[15px] pl-[15px] pt-[5px] pb-[5px] rounded-[3px]"
                    >
                        Video
                    </button>
                </div>
            </div>
        </section>
        <Cards />
    </main>
</template>
<style scoped></style>

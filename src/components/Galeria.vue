<script setup>
import Card from '../components/Card.vue'
</script>
<template>
    <section>
        <div class="flex justify-center items-center">
            <div class="flex justify-center items-center  2xl:gap-5 sm:gap-3 gap-2 2xl:p-3 sm:p-3 p-2 flex-wrap 2xl:w-[90%] sm:w-[90%] w-full">
                <Card/>
                <div class="flex justify-between flex-col p-5 items-center 2xl:h-[400px] sm:h-[400px] h-auto w-[420px] shadow-lg border-[1px] border-[#ddd] rounded-[12px]">
                    <div class="flex justify-between 2xl:flex-row sm:flex-row flex-col w-full items-center">
                        <div class="">
                            <span><i class="pr-1.5 ri-women-line"></i>Mulher</span>
                        </div>
                        <div class="">
                            <i class="text-blue-500 ri-shield-check-fill text-[24px]"></i>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col gap-2">
                        <div class="">
                            <img class="h-[250px] rounded-[5px] w-full object-cover" src="https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </div>
                        <div class="">
                            <h3>Jéssica Gomes</h3>
                        </div>
                    </div>
                    <div class="flex justify-between w-full gap-2 2xl:flex-row sm:flex-row flex-col items-center">
                        <div class="">
                            <span><i class="pr-1.5 text-red-500 ri-map-pin-fill"></i>São Paulo, SP</span>
                        </div>
                        <div class="">
                            <button class="pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px] bg-red-500 text-white font-semibold">R$ 1.250/H</button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between flex-col p-5 items-center 2xl:h-[400px] sm:h-[400px] h-auto w-[420px] shadow-lg border-[1px] border-[#ddd] rounded-[12px]">
                    <div class="flex justify-between 2xl:flex-row sm:flex-row flex-col w-full items-center">
                        <div class="">
                            <span><i class="pr-1.5 ri-women-line"></i>Mulher</span>
                        </div>
                        <div class="">
                            <i class="text-blue-500 ri-shield-check-fill text-[24px]"></i>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col gap-2">
                        <div class="">
                            <img class="h-[250px] rounded-[5px] w-full object-cover" src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </div>
                        <div class="">
                            <h3>Larrisa Manuela</h3>
                        </div>
                    </div>
                    <div class="flex justify-between w-full gap-2 2xl:flex-row sm:flex-row flex-col items-center">
                        <div class="">
                            <span><i class="pr-1.5 text-red-500 ri-map-pin-fill"></i>São Paulo, SP</span>
                        </div>
                        <div class="">
                            <button class="pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px] bg-red-500 text-white font-semibold">R$ 3.250/H</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
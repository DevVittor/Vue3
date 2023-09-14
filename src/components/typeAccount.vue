<script setup></script>
<template>
  <div class="flex items-center justify-center p-[40px]">
    <div class="flex justify-center items-center flex-col gap-10 border-[1px] bg-black text-white border-[#ddd] h-[500px] w-[800px] rounded-[12px] shadow-lg">
        <div class="">
            <h2 class="text-[30px] font-semibold">Eu sou um(a)</h2>
        </div>
        <div class="flex justify-center items-center gap-5">
            <div class="flex flex-col justify-center items-center gap-3">
                <div class="cursor-pointer h-[200px] w-[200px] rounded-[12px] bg-red-500">
                    <img class="h-full w-full object-cover rounded-[12px]" src="https://images.pexels.com/photos/375902/pexels-photo-375902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div class="">
                    <h3>Cliente</h3>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-3">
                <div class="cursor-pointer h-[200px] w-[200px] rounded-[12px] bg-red-500">
                    <img class="h-full w-full object-cover rounded-[12px]" src="https://images.pexels.com/photos/4576085/pexels-photo-4576085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div class="">
                    <h3>Acompanhante</h3>
                </div>
            </div>
        </div>
        <div class="">
            <button class="bg-blue-500 pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px] text-white font-medium ">Avançar<i class="pl-1.5 ri-arrow-right-fill"></i></button>
        </div>

    </div>
  </div>
</template>

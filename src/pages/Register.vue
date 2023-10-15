<script></script>
<template>
    <main>
        <section>
            <div class="container-register">
                <div class="box-typeAccount">
                    <div class="w-full flex gap-5">
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="typeClient">
                                <img class="rounded-full h-full w-full object-cover"
                                    src="https://images.pexels.com/photos/375902/pexels-photo-375902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="">
                            </div>
                            <div class="typeName flex justify-center items-center">
                                <h3 class="font-medium text-[24px]">Cliente</h3>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="typeClient">
                                <img class="h-full w-full object-cover rounded-full"
                                    src="https://images.pexels.com/photos/4576085/pexels-photo-4576085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="">
                            </div>
                            <div class="typeName flex justify-center items-center">
                                <h3 class="font-medium text-[24px]">Acompanhante</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            class="bg-blue-500 text-white font-semibold text-[20px] pr-[20px] pl-[20px] pt-[3px] pb-[3px] rounded-[3px]">Continuar<i
                                class="text-white pl-1.5 ri-arrow-right-fill"></i></button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style lang="css">
.container-register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 837px;
}

.box-typeAccount {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    height: auto;
    width: auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.typeClient {
    height: 250px;
    width: 250px;
    border-radius: 100%;
    background: black;
}
</style>
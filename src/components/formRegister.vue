<script></script>
<template>
    <main>
        <section>
            <div class="flex justify-center items-center p-3">
                <div class="border-[1px] border-[#ddd] rounded-[12px] flex items-center justify-center">
                    <div class="h-[650px] w-[400px] container-img-register">
                        <img class="pointer-events-none h-full w-full img-register object-cover" src="https://images.pexels.com/photos/2038561/pexels-photo-2038561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                    </div>
                    <div class="h-[650px] container-form-register w-auto bg-red- p-[80px] flex justify-center items-center flex-col gap-5">
                        <div class="">
                            <h2 class="font-semibold text-[33px]">Criar Conta</h2>
                        </div>
                        <div class="flex social-register justify-between items-center gap-5">
                            <button class="pr-[10px] pl-[10px] pt-[3px] pb-[3px] border-2 border-[#ddd] rounded-[3px]"><i class="pr-1.5 ri-google-fill"></i>Google</button>
                            <button class="pr-[10px] pl-[10px] pt-[3px] pb-[3px] border-2 border-[#ddd] rounded-[3px]"><i class="pr-1.5 ri-facebook-box-fill"></i>Facebook</button>
                            <button class="pr-[10px] pl-[10px] pt-[3px] pb-[3px] border-2 border-[#ddd] rounded-[3px]"><i class="pr-1.5 ri-twitter-x-fill"></i>Twitter</button>
                        </div>
                        <div class="flex justify-center items-center gap-5 w-full">
                            <hr class="w-[35%]">
                            <span>Ou</span>
                            <hr class="w-[35%]">
                        </div>
                        <div class="flex flex-col items-center gap-2">
                            <label class="flex flex-col " for="">
                                Nome
                                <input class="border-[1px] border-[#ddd] rounded-[3px] pt-[5px] pb-[5px] pr-[10px] pl-[10px]" type="text" name="" id="" placeholder="Nome Completo">
                            </label>
                            <label class="flex flex-col" for="">
                                Email
                                <input class="border-[1px] border-[#ddd] rounded-[3px] pt-[5px] pb-[5px] pr-[10px] pl-[10px]" type="email" name="" id="" placeholder="Email">
                            </label>
                            <label class="flex flex-col" for="">
                                Senha
                                <input class="border-[1px] border-[#ddd] rounded-[3px] pt-[5px] pb-[5px] pr-[10px] pl-[10px]" type="password" name="" id="" placeholder="Senha">
                            </label>
                            <label class="flex flex-col" for="">
                                Confirmar Senha
                                <input class="border-[1px] border-[#ddd] rounded-[3px] pt-[5px] pb-[5px] pr-[10px] pl-[10px]" type="password" name="" id="" placeholder="Confirme a Senha">
                            </label>
                            <button class="text-white font-semibold pr-[10px] mt-[15px] w-full bg-red-500 pl-[10px] pt-[5px] pb-[5px] rounded-[3px]">Registrar <i class="pl-1.5 ri-arrow-right-fill"></i></button>
                            <button class="text-white font-semibold pr-[10px] w-full bg-blue-500 pl-[10px] pt-[5px] pb-[5px] rounded-[3px]">Já tenho uma conta <i class="pl-1.5 ri-door-open-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
.img-register{
    border-radius: 12px 0px 0px 12px ;
}
@media screen and (max-width:960px){
    .container-img-register{
        display: none;
    }
}
@media screen and (max-width:572px){
    .container-form-register{
        height: auto;
        padding: 20px 40px;
    }
}
@media screen and (max-width:490px){
    .container-form-register{
        height: auto;
        padding: 10px 20px;
    }
}
@media screen and (max-width:445px){
    .social-register{
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    .container-form-register{
        height: auto;
        padding: 10px 40px;
    }
}
@media screen and (max-width:320px){
    .container-form-register{
        height: auto;
        padding: 10px 15px;
    }
}
</style>
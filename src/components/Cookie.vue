<script setup>
function close_cookie() {
    document.getElementById('section_cookie').style.display = 'none';
}
function fecharPagina() {
    history.back();
}
</script>
<template>
    <section id="section_cookie">
        <div class="container-cookie">
            <div class="box-cookie">
                <div class="cookie-img">
                    <img src="/img/18.png" alt="">
                    <h2>Você é maior de 18 anos ?</h2>
                </div>
                <div class="flex justify-center">
                    <p class="w-[300px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis cumque
                        quae iste, animi eaque iusto dolorem voluptate veniam eos eveniet, quas autem non recusandae magni
                        illum suscipit sequi adipisci.</p>
                </div>
                <div class="flex justify-center flex-col gap-2">
                    <button @click="fecharPagina"
                        class="bg-red-500 text-white font-semibold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded-[3px]"><i
                            class="pr-1.5 ri-close-fill"></i>Não sou e discordo</button>
                    <button @click="close_cookie"
                        class="bg-blue-500 text-white font-semibold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded-[3px]"><i
                            class="pr-1.5 ri-check-fill"></i>Eu sou e concordo</button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-cookie {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    height: auto;
    margin-bottom: 40px;
}

.box-cookie {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    height: auto;
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.cookie-img {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cookie-img img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 100%;
}

.cookie-img h2 {
    font-size: 20px;
    font-weight: 600;
}
</style>
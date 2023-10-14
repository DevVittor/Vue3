<script setup>
import Services from './Services.vue';
import imageSlider from './sliderImage.vue';
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
        <div class="container-profile">
            <div class="container-info-profile ">
                <div class="box-info-profile">
                    <nav>
                        <ul class="">
                            <li><i class="text-blue-500 ri-verified-badge-fill"></i>Profissional</li>
                            <li><i class="text-red-500 text-[20px] pr-1.5 ri-flashlight-fill"></i>Destaque</li>
                            <li><i class="text-green-500 ri-shield-check-fill"></i>Perfil Verificado</li>
                        </ul>
                    </nav>
                </div>
                <div class="container-local-phone">
                    <h4 class="">Rio de Janeiro, Rj</h4>
                    <hr class="">
                    <h4 class="">(21) 998742-102</h4>
                </div>
                <div class="container-name-gen-age">
                    <div class="container-name">
                        <h2 class=" ">Jéssica <b class="pl-[50px]">Gomes</b>
                        </h2>
                    </div>
                    <div class="container-gen-age">
                        <h4 class="">Mulher</h4>
                        <hr class="">
                        <h4 class="">32 anos</h4>
                    </div>
                </div>
                <div class="container-description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perspiciatis
                        placeat hic
                        error, veniam
                        natus ipsum labore vitae facilis aliquam harum cumque illum consectetur in. Quibusdam, est iure!
                        Dolorum, molestiae quasi!</p>
                </div>
                <div class="container-price-horarios-pagamentos">
                    <div class="container-price">
                        <h2 class="">R$ 250/<span class="">Hora</span></h2>
                    </div>
                    <div class="container-horarios">
                        <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, quam?</p>
                    </div>
                    <div class="container-pagamentos">
                        <nav>
                            <ul class="">
                                <li><i class="fa-solid fa-money-bill"></i>Dinheiro</li>
                                <li><i class="fa-brands fa-pix"></i>Pix</li>
                                <li><i class="fa-regular fa-credit-card"></i>Cartão de Crédito</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="container-patrocinadores">
                    <h2 class="">Anunciante</h2>
                </div>
            </div>
            <div class="container-image-profile">
                <Services />
                <div class="box-image-profile">
                    <imageSlider />
                    <button><i class="ri-play-circle-line"></i>Assistir o Vídeo</button>
                </div>
                <Services />
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 837px;
}

.container-info-profile {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    width: 650px;
    padding: 5px 10px;
    border-right: 1px solid #ddd;
}

.box-info-profile ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    background: black;
    color: white;
    border-radius: 5px;
    padding: 3px 10px;
}

.box-info-profile li {
    font-weight: 400;
}

.box-info-profile i {
    font-size: 20px;
    padding-right: 5px;
}

.container-image-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 10px;
}

.container-local-phone {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.container-local-phone h4 {
    color: black;
    font-weight: 400;
    font-size: 18px;
}

.container-local-phone hr {
    width: 70px;
    border: 2px solid black;
}

.container-name-gen-age {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.container-name h2 {
    font-size: 64px;
    line-height: 60px;
    font-weight: 700;
}

.container-price-horarios-pagamentos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    background: black;
    color: white;
    padding: 15px 30px;
    width: 100%;
    border-radius: 5px;
}

.container-gen-age {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.container-gen-age h4 {
    color: black;
    font-weight: 400;
    font-size: 18px;
}

.container-gen-age hr {
    width: 70px;
    border: 2px solid black;
}

.container-description p {
    text-align: center;
}

.container-price {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.container-price h2 {
    font-size: 44px;
    font-weight: 700;
}

.container-price span {
    font-size: 16px;
    color: gray;
    font-weight: 500;
}

.container-horarios {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-horarios p {
    text-align: center;
}

.container-pagamentos ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    padding: 3px 10px;
    flex-wrap: wrap;
}

.container-pagamentos li {
    font-weight: 500;
}

.container-pagamentos i {
    padding-right: 5px;
    font-size: 20px;
}

.container-patrocinadores {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    height: 220px;
    width: 100%;
    border-radius: 5px;
}

.container-patrocinadores h2 {
    font-size: 20px;
    font-weight: 600;
    color: white;
}

.box-image-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: auto;
    max-height: 600px;
    min-width: 400px;
    max-width: 800px;
}

.box-image-profile button {
    background: black;
    color: white;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 50px;
}

.box-image-profile i {
    padding-right: 5px;
}

@media screen and (max-width:640px) {
    .container-profile {
        height: auto;
        flex-wrap: wrap;
        width: 100%;
    }

    .container-info-profile {
        border: none;
        width: 100%;
    }

    .box-info-profile ul {
        padding: 5px 0;
        gap: 5px;
    }

    .container-local-phone {
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        gap: 5px;
    }

    .container-local-phone hr {
        width: 20px;
        border: 1px solid gray;
    }

    .container-price-horarios-pagamentos {
        padding: 10px 5px;
    }

    .container-image-profile {
        width: 100%;
    }

    .box-image-profile {
        gap: 10px;
        padding: 5px;
    }

    .box-image-profile img {
        width: 90%;
    }
}
</style>
<script setup>
import Content from './Content.vue';
</script>
<template>
    <main>
        <section>
            <div class="container-profile">
                <div class="box-profile">
                    <div class="box-1">
                        <img src="https://images.pexels.com/photos/1035678/pexels-photo-1035678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                    </div>
                    <div class="box-2">
                        <button><i class="pr-1.5 fa-solid fa-image"></i>Fotos</button>
                        <button><i class="pr-1.5 fa-solid fa-file-video"></i>Vídeo</button>
                        <button><i class="pr-1.5 fa-solid fa-quote-left"></i>Descrição</button>
                        <button><i class="pr-1.5 fa-solid fa-bell-concierge"></i>Serviços</button>
                        <button><i class="pr-1.5 fa-solid fa-child-reaching"></i>Corpo</button>
                        <button><i class="pr-1.5 fa-regular fa-calendar-days"></i>Horários</button>
                        <button><i class="pr-1.5 fa-solid fa-map-pin"></i>Localização</button>
                        <button><i class="pr-1.5 fa-solid fa-share-nodes"></i>Redes Sociais</button>
                    </div>
                </div>
            </div>
        </section>
        <Content/>
    </main>
</template>
<style scoped>

.container-profile{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 40px 20px;
}
.box-profile{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
}
.box{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.box-1{
    height: 350px;
    width: auto;
    border-radius: 5px;
}
.box-1 img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.box-2{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    height: 350px;
    width: auto;
    padding: 10px;
    border-radius: 5px;
    background: red;
}
.box-2 button{
    background: black ;
    color: white;
    font-weight: 500;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 3px;
}
@media screen and (max-width:879px){
    .box-2{
        height: auto;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
}
</style>
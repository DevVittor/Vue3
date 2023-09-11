<script setup></script>
<template>
    <header>
        <div class="container-menu">
            <div class="box-logo">
                <a href="/"><h1>ABRIME</h1></a>
            </div>
            <div class="box-menu">
                <nav>
                    <ul>
                        <li><a href="/"><i class="ri-home-4-line"></i> Inicio</a></li>
                        <li><a href="#">Categoria</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<style scoped>
header{
    position: sticky;
    top: 0;
    border-bottom: 1px solid #ddd;
    background: white;
    z-index:9999;
}
    .container-menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 50px;
    }
    .box-logo a{
        color: #212121;
        font-weight: 600;
        font-size: 24px;
    }
    .box-menu ul{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .box-menu a{
        display: flex;
        align-items: center;
        gap: 2px;
        font-weight: 500;
        color: #212121;
        font-size: 16px;
    }
    @media screen and (max-width: 640px){
        .container-menu{
            flex-direction: column;
            padding-bottom: 15px;
        }
    }
</style>
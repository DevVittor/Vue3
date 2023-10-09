<script setup></script>
<template>
    <section>
        <div class="title-destaque">
            <h2>Destaques <i class="ri-flashlight-fill"></i></h2>
        </div>
        <div class="container-destaque">
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/3806244/pexels-photo-3806244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/1846990/pexels-photo-1846990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/12645297/pexels-photo-12645297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/8657651/pexels-photo-8657651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/8741037/pexels-photo-8741037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/14590438/pexels-photo-14590438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/12590660/pexels-photo-12590660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
            <div class="box-destaque">
                <img src="https://images.pexels.com/photos/8104009/pexels-photo-8104009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-destaque {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
    padding: 10px;
}

.box-destaque {
    height: 350px;
    width: 220px;
    background: black;
    border-radius: 5px;
}

.box-destaque:hover {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.box-destaque img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.title-destaque {
    padding-top: 10px;
    padding-bottom: 0;
    padding-right: 55px;
    padding-left: 55px;
}

.title-destaque h2 {
    font-size: 28px;
    font-weight: 700;
}

.title-destaque i {
    color: #FE0000;
}</style>
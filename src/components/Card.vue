<script setup></script>
<template>
    <div class="card-profile">
        <img src="https://images.pexels.com/photos/14186858/pexels-photo-14186858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    </div>
</template>
<style scoped>
.card-profile{
    height: 350px;
    width: 220px;
    border-radius: 5px;
}
.card-profile:hover{
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.card-profile img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
}
</style>
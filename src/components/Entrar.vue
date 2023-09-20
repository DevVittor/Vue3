<script setup>
import { onMounted,onBeforeUnmount  } from 'vue';
import { RouterLink } from 'vue-router';

// Desabilitar o scroll ao montar o componente
onMounted(()=>{
document.body.style.overflow = 'hidden';
});

// Habilitar o scroll novamente ao destruir o componente
onBeforeUnmount(() => {
document.body.style.overflow = 'auto';
});
</script>
<template>
<section id="section-acessar">
<div class="container-acessar">
    <div class="box-acessar">
        <h2>Acessar Conta</h2>
        <input type="email" name="" id="" placeholder="Email cadastrado">
        <div class="acessar-password">
            <input type="password" name="" id="" placeholder="************">
            <label for="">
                <input type="checkbox" name="" id="">
                Lembrar de mim
            </label>
        </div>
        <div class="pt-[8px]">
            <RouterLink class="hover:underline hover:delay-50 hover:text-blue-400" to="/">Esqueceu a senha ?</RouterLink>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 pt-3">
            <button class="bg-black text-white font-semibold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded-[3px]" type="submit">Acessar Conta</button>
            <button class="bg-red-500 text-white font-semibold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded-[3px]" type="submit">Criar uma conta</button>
        </div>
    </div>
    
</div>
</section>
</template>
<style scoped>
#section-acessar{
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
background: rgba(0, 0, 0, white);
backdrop-filter: blur(10px);
width:100%;
height: 100vh;
}
.container-acessar{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 40px;
height: auto;
padding: 20px;
}
.box-acessar{
display: flex;
justify-content: center;
flex-direction: column;
padding: 20px;
border: 1px solid #ddd;
background: white;
border-radius: 10px;
}
.box-acessar h2{
font-size: 28px;
font-weight: 600;
padding-bottom: 20px;
}
.box-acessar input[type='email']{
padding: 8px 10px;
border: 1px solid #ddd;
outline: none;
border-radius: 3px;
margin-bottom: 10px;
}
.acessar-password{
display: flex;
flex-direction: column;
gap: 10px;
}
.acessar-password input[type='password']{
padding: 8px 10px;
border: 1px solid #ddd;
outline: none;
border-radius: 3px;
}
</style>
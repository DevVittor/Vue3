<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
const email = ref("");
const senha = ref("");

const alturaDaPagina = ref(window.innerHeight - 75 + "px");

onMounted(() => {
    // Atualizar a altura quando a janela for redimensionada
    window.addEventListener("resize", () => {
        alturaDaPagina.value = window.innerHeight - 75 + "px";
    });
});

function checarDados(event) {
    event.preventDefault();
    const pegarDados = {
        email: email.value,
        senha: senha.value,
    }
    axios.post('http://localhost:3000/acessar/ok', pegarDados)
        .then(res => {
            let token = res.data.token;
            localStorage.setItem("Token", token);
        }).catch(error => {
            console.log(`Login Inválido por causa do error ${error}`);
        });
}
</script>
<template>
    <section>
        <div class="container-acessar" :style="{ height: alturaDaPagina }">
            <div class="box-image">
                <img src="https://images.pexels.com/photos/7120314/pexels-photo-7120314.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />
            </div>
            <div class="box-acessar">
                <form @submit="checarDados">
                    <h2>Acessar Conta</h2>

                    <input type="email" name="email" v-model="email" id="" placeholder="Email cadastrado" />
                    <div class="acessar-password">
                        <input type="password" name="senha" v-model="senha" id="" placeholder="************" />
                        <label for="">
                            <input type="checkbox" name="" id="" />
                            Lembrar de mim
                        </label>
                    </div>
                    <div class="pt-[8px]">
                        <RouterLink class="hover:underline hover:delay-50 hover:text-blue-400" to="/">Esqueceu a senha ?
                        </RouterLink>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-2 pt-3">
                        <button
                            class="bg-black text-white font-semibold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded-[3px]"
                            type="submit">
                            Acessar Conta
                        </button>
                        <button
                            class="bg-red-500 text-white font-semibold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded-[3px]"
                            type="submit">
                            Criar uma conta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-acessar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
}

.box-image {
    height: 400px;
    width: 250px;
    background: red;
}

.box-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.box-acessar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 40px;
    height: 400px;
    background: white;
}

.box-acessar h2 {
    font-size: 28px;
    font-weight: 600;
    padding-bottom: 20px;
}

.box-acessar input[type="email"] {
    padding: 8px 10px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 3px;
    margin-bottom: 10px;
}

.acessar-password {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.acessar-password input[type="password"] {
    padding: 8px 10px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 3px;
}

@media screen and (max-width: 660px) {
    .container-acessar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        padding: 0;
    }

    .box-image {
        display: none;
    }

    .box-acessar {
        border-radius: 5px;
    }
}
</style>

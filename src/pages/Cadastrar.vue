<script setup>
import { ref } from "vue";
import axios from "axios";
const nome = ref("");
const email = ref("");
const senha = ref("");

function postCadastro() {
  const dadosCadastro = {
    nome: nome.value,
    email: email.value,
    senha: senha.value,
  };
  axios
    .post("http://localhost:8080/cadastrar/salvar", dadosCadastro)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.error(error));
}
</script>
<template>
  <div class="container-cadastro">
    <div class="box-cadastro">
      <form @submit="postCadastro">
        <h2>Cadastrar Usuário</h2>
        <input type="text" name="nome" placeholder="Nome" v-model="nome" />
        <input type="text" name="email" placeholder="Email" v-model="email" />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          v-model="senha"
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  </div>
</template>
<style scoped>
.container-cadastro {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 87vh;
}
.box-cadastro {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  border-radius: 12px;
  background: white;
}
.box-cadastro form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 40px;
}
.box-cadastro h2 {
  font-size: 24px;
  font-weight: 600;
}
.box-cadastro input {
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px 10px;
  outline: none;
}
</style>

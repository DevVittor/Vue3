<script setup>
import { ref, onMounted } from "vue";
const gen = ref([]);

const selectedGen = ref("");
const opcaoSim = ref(false);
const opcaoNao = ref(false);

const desativarOpcao = (opcao) => {
  if (opcao === "Sim") {
    opcaoNao.value = !opcaoSim.value;
  } else if (opcao === "Não") {
    opcaoSim.value = !opcaoNao.value;
  }
};

const gens = () => {
  gen.value = ["Mulher", "Homem", "Trans"];
};

onMounted(() => {
  gens();
});
</script>
<template>
  <div class="form-gen flex flex-col gap-[5px]">
    <label for=""> Gênero: </label>
    <select name="" id="" v-model="selectedGen">
      <option value="" selected disabled hidden>Escolha seu Gênero</option>
      <option v-for="listGen in gen" :value="listGen">{{ listGen }}</option>
    </select>
  </div>
  <div v-if="selectedGen === 'Trans'" class="flex flex-col gap-[5px]">
    <label for=""> Operado? </label>
    <div class="flex items-center gap-3">
      <label>
        <input
          type="checkbox"
          name="opcao"
          v-model="opcaoSim"
          @change="desativarOpcao('Sim')"
        />
        Sim
      </label>
      <label>
        <input
          type="checkbox"
          name="opcao"
          v-model="opcaoNao"
          @change="desativarOpcao('Não')"
        />
        Não
      </label>
    </div>
  </div>
</template>

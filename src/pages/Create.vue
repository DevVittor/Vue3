<script setup>
import { ref, onMounted } from 'vue';

const gen = ref([]);
const years = ref([]);
const day = ref([]);
const month = ref([]);

const selectedGen = ref('');
const opcaoSim = ref(false);
const opcaoNao = ref(false);

const desativarOpcao = (opcao) => {
  if (opcao === 'Sim') {
    opcaoNao.value = !opcaoSim.value;
  } else if (opcao === 'Não') {
    opcaoSim.value = !opcaoNao.value;
  }
};

const gens = () => {
  gen.value = ["Mulher", "Homem", "Trans"];
};

const fillYearSelect = () => {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 100; year--) {
    years.value.push(year);
  }
};

const monthSelect = () => {
  for (let months = 1; months <= 12; months++) {
    month.value.push(months);
  }
};

const daySelect = () => {
  for (let days = 1; days <= 31; days++) {
    day.value.push(days);
  }
};

onMounted(() => {
  fillYearSelect();
  monthSelect();
  daySelect();
  gens();
});

</script>
<template>
  <main>
    <section>
      <div class="flex justify-center items-center gap-2 sm:pr-3 sm:pt-3 sm:pl-3 pt-3 flex-wrap">
        <div class="flex flex-wrap justify-center items-center flex-row gap-2">
          <div class="card image">
            <img
              class="2xl:h-[400px] 2xl:w-[220px] xl:h-[330px] xl:w-[200px] lg:h-[290px] lg:w-[170px] md:h-[270px] md:w-[140px] sm:h-[342px] sm:w-[195px] h-[220px] w-[120px] object-cover rounded-[3px]"
              src="https://images.pexels.com/photos/2806207/pexels-photo-2806207.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="" />
          </div>
          <div class="foto profile">
            <img
              class="2xl:h-[400px] 2xl:w-[400px] xl:h-[330px] xl:w-[330px] lg:h-[290px] lg:w-[290px] md:h-[270px] md:w-[270px] sm:h-[342px] sm:w-[342px] h-[220px] w-[220px] object-cover rounded-[3px]"
              src="https://images.pexels.com/photos/3209624/pexels-photo-3209624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
          </div>
        </div>
        <div class="video">
          <img
            class="2xl:h-[400px] 2xl:w-[850px] xl:h-[330px] xl:w-[700px] lg:h-[290px] lg:w-[500px] md:h-[270px] md:w-[418px] sm:h-[242px] sm:w-[545px] h-[220px] w-[348px] object-cover rounded-[3px]"
            src="https://images.pexels.com/photos/2467393/pexels-photo-2467393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" />
        </div>
      </div>
    </section>
    <section>
      <div class="container-form">
        <div class="box-form">
          <div class="form-name">
            <label for="">
              Nome:
            </label>
            <input type="text" name="" id="" placeholder="Digite seu nome">
          </div>
          <div class="form-lastname">
            <label for="">
              Sobrenome:
            </label>
            <input type="text" name="" id="" placeholder="Digite seu sobrenome">
          </div>
          <div class="form-nascimento">
            <label for="">
              Data de nascimento:
            </label>
            <div class="inputs-nascimento">
              <select name="" id="">
                <option v-for="days in day" :value="day">{{ days }}</option>
              </select>
              <span>/</span>
              <select name="" id="">
                <option v-for="months in month" :value="month">{{ months }}</option>
              </select>
              <span>/</span>
              <select name="" id="">
                <option v-for="year in years" :value="year">{{ year }}</option>
              </select>
            </div>
          </div>
          <div class="form-email">
            <label for="">
              Email:
            </label>
            <input type="text" name="" id="" placeholder="Digite seu email">
          </div>
          <div class="form-email">
            <label for="">
              Password:
            </label>
            <input type="password" name="" id="" placeholder="******">
          </div>
          <div class="form-email">
            <label for="">
              Confirm Password:
            </label>
            <input type="password" name="" id="" placeholder="******">
          </div>
          <div class="form-gen flex flex-col gap-[5px]">
            <label for="">
              Gênero:
            </label>
            <select name="" id="" v-model="selectedGen">
              <option value="" selected disabled hidden>Escolha seu Gênero</option>
              <option v-for="listGen in gen" :value="listGen">{{ listGen }}</option>
            </select>
          </div>
          <div v-if="selectedGen === 'Trans'" class="flex flex-col gap-[5px]">
            <label for="">
              Operado?
            </label>
            <div class="flex items-center gap-3">
              <label>
                <input type="checkbox" name="opcao" v-model="opcaoSim" @change="desativarOpcao('Sim')">
                Sim
              </label>
              <label>
                <input type="checkbox" name="opcao" v-model="opcaoNao" @change="desativarOpcao('Não')">
                Não
              </label>
            </div>
          </div>
          <div class="form-corpo flex flex-col gap-[5px]">
            <label for="">
              Tipo de corpo:
            </label>
            <select name="" id="">
              <option value="">Magra</option>
              <option value="">Normal</option>
              <option value="">Gostosa</option>
              <option value="">Gordinha</option>
              <option value="">Extra G</option>
              <option value="">Musculosa</option>
            </select>
          </div>
          <div class="form-peso flex flex-col gap-[5px]">
            <label for="">
              Peso:
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Média de peso</option>
              <option value="">Abaixo de 40Kg</option>
              <option value="">40Kg - 50Kg</option>
              <option value="">50Kg - 60kg</option>
              <option value="">60kg - 70kg </option>
              <option value="">80kg - 80kg</option>
              <option value="">90kg - 100kg</option>
              <option value="">Acima de 100kg</option>
            </select>
          </div>
          <div class="form-altura flex flex-col gap-[5px]">
            <label for="">
              Altura:
            </label>
            <input class="" type="number" name="" id="" placeholder="Ex: 1.73 M">
          </div>
          <div class="form-peitos flex flex-col gap-[5px]">
            <label for="">
              Peitos:
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Tipo de peito</option>
              <option value="">Pequeno</option>
              <option value="">Normal</option>
              <option value="">Grande</option>
              <option value="">Extra Grande</option>
              <option value="">Gigantesco</option>
            </select>
          </div>
          <div class="form-bunda flex flex-col gap-[5px]">
            <label for="">
              Bunda:
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Tipo de Bunda</option>
              <option value="">Pequeno</option>
              <option value="">Normal</option>
              <option value="">Grande</option>
              <option value="">Extra Grande</option>
              <option value="">Gigantesco</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Você tem tatuagem ?
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Quantidade de Tatuagens</option>
              <option value="">Nenhuma</option>
              <option value="">Poucas</option>
              <option value="">Bastante</option>
              <option value="">Pelo corpo Todo</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Ôculos ou Aparelho bocal ?
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Você tem ?</option>
              <option value="">Não uso nada</option>
              <option value="">Apenas ôculos</option>
              <option value="">Apenas aparelho bocal</option>
              <option value="">Uso as duas coisas</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Pelos no corpo ?
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Você tem pelos ?</option>
              <option value="">Sem nada</option>
              <option value="">Apenas nas genitárias</option>
              <option value="">Apenas no suvaco</option>
              <option value="">Na genitária e no suvaco</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Sua Etnia(Raça) é:
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Qual sua Etnia ?</option>
              <option value="">Branca</option>
              <option value="">Preta</option>
              <option value="">Morena</option>
              <option value="">Indigena</option>
              <option value="">Asiatica</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Preço da Hora:
            </label>
            <input type="text" name="" id="" placeholder="R$ Valor/H">
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Serviços
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Eu faço</option>
              <option value="">Casal</option>
              <option value="">Anal</option>
              <option value="">Beijo</option>
              <option value="">Boquete</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Serviços Especiais
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Extra</option>
              <option value="">Anal Giratório</option>
              <option value="">Masoquismo</option>
              <option value="">Namoradinha</option>
              <option value="">Atuação</option>
              <option value="">Espanhola</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Tipo de Atendimento:
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Eu atendo</option>
              <option value="">Apenas meu local</option>
              <option value="">A domicilio</option>
              <option value="">Festas</option>
              <option value="">Motel</option>
              <option value="">Hotel</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Endereço de Atendimento:
            </label>
            <input type="text" name="" id="" placeholder="Aonde é">
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Dias e Horários:
            </label>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Segunda-feira</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Terça-feira</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Quarta-feira</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Quinta-feira</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Sexta-feira</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Sábado</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Domingo</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <select name="" id="">
                <option value="" selected disabled hidden>Feriados</option>
              </select>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
              <span>Até</span>
              <select name="" id="">
                <option value="">00:00</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Sobre:
            </label>
            <textarea name="" id="" cols="30" rows="10" class="border-[1px] border-[#ddd]"></textarea>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Você está no:
            </label>
            <select name="" id="">
              <option value="">Rio de Janeiro</option>
            </select>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label for="">
              Seu Contato:
            </label>
            <input type="text" placeholder="Seu celular" />
          </div>
          <div class="">
            <input class="bg-black pr-[10px] pl-[10px] pt-[5px] pb-[5px] text-white font-semibold rounded-[3px]"
              type="submit" value="Cadastrar">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.container-form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 100%;
}

.box-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 10px;
  background: white;
  width: 40%;
  border-radius: 5px;
}

.form-name {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-name input {
  border-bottom: 1px solid #ddd;
  outline: none;
}

.form-lastname {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-lastname input {
  border-bottom: 1px solid #ddd;
  outline: none;
}

.form-email {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-email input {
  border-bottom: 1px solid #ddd;
  outline: none;
}

.form-gen {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-gen select {
  padding: 3px 10px;
  font-weight: 400;
  font-size: 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
}

.form-nascimento {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.inputs-nascimento {
  display: flex;
  align-items: center;
  gap: 8px;
}

.inputs-nascimento input {
  border-bottom: 1px solid #ddd;
  outline: none;
}

@media screen and (max-width:640px) {
  .container-form {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
  }

  .box-form {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
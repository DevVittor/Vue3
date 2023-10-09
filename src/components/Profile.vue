<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const myGallery = ref([]);
const name = ref();
const age = ref();
const estado = ref();
const cidade = ref();
const money = ref();
const iconCheck = ref();
const descriptionProfile = ref();

onMounted(() => {
  axios
    .get("http://localhost:8080/:id")
    .then((res) => {
      myGallery.value = res.data.fotos;
      document.title = res.data.page;
      name.value = res.data.profile;
      age.value = res.data.age;
      estado.value = res.data.estado;
      cidade.value = res.data.cidade;
      money.value = res.data.money;
      iconCheck.value = res.data.check
      descriptionProfile.value = res.data.description;
    })
    .catch((error) => console.error(error));
});

const servi = ref([
  "Casal",
  "Anal",
  "Beijo",
  "Orgia"
]);

function Clicou() {
  const modalDiv = document.getElementById('Service');
  modalDiv.classList.toggle('selected');
}



</script>
<template>
  <main>
    <section>
      <div class="h-auto w-full p-[10px] flex justify-center items-center">
        <div class="h-full w-[70%] flex flex-col justify-center items-center">
          <div class="">
            <button
              class="bg-blue-500 mb-[5px] pr-[15px] pl-[15px] pb-[3px] pt-[3px] rounded-[3px] text-white font-semibold">
              <i class="pr-1.5 ri-play-circle-line"></i>Video
            </button>
          </div>
          <div class="h-[180px] w-[180px] flex justify-center items-end shadow-md rounded-[12px]">
            <img class="h-full w-full object-cover rounded-[12px] pointer-events-none"
              src="https://images.pexels.com/photos/1877913/pexels-photo-1877913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
            <div class="absolute mb-[-5px]">
              <span
                class="bg-red-500 shadow-md text-[14px] text-white font-semibold pt-[5px] pb-[5px] pr-[20px] pl-[20px] rounded-[3px]">R$
                {{ money }}/H</span>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <h3 class="pt-[15px]" v-if="iconCheck == true">
              <i class="pr-2 text-[20px] text-blue-500 ri-shield-check-fill" title="Perfil Verificado"></i><i
                class="pr-1.5 fa-solid fa-venus" title="Mulher"></i>{{ name }}, {{ age }}
            </h3>
            <h3 class="pt-[15px]" v-else>
              <i class="pr-2 text-[20px] text-red-500 ri-close-circle-fill"></i>
              <i class="pr-1.5 fa-solid fa-venus" title="Mulher"></i>{{ name }}, {{ age }}
            </h3>
            <span><i class="pr-2 text-[20px] text-red-500 ri-map-pin-fill" title="Localização"></i>{{ estado }}, {{ cidade
            }}</span>
          </div>
          <div class="pt-[8px]">
            <p class="w-[350px] text-center">
              {{ descriptionProfile }}
            </p>
          </div>
          <div class="flex justify-center items-center gap-3 pt-[5px]">
            <nav>
              <ul class="flex items-center gap-3">
                <li>
                  <a class="text-[24px]" href="#" target="_blank"><i class="ri-facebook-box-fill"
                      title="facebook"></i></a>
                </li>
                <li>
                  <a class="text-[24px]" href="#" target="_blank"><i class="ri-instagram-line" title="Instagram"></i></a>
                </li>
                <li>
                  <a class="text-[24px]" href="#" target="_blank"><i class="ri-twitter-x-fill" title="Twitter"></i></a>
                </li>
                <li>
                  <a class="text-[24px]" href="#" target="_blank"><i class="ri-telegram-fill" title="Telegram"></i></a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-3 pt-[5px]">
            <button @click="Clicou" class="bg-black pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white">
              <i class="pr-1.5 text-white fa-solid fa-bell-concierge"></i>Serviços
            </button>
            <button class="bg-black pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white">
              <i class="pr-1.5 text-white fa-solid fa-child-reaching"></i>Corpo
            </button>
            <button class="bg-black pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white">
              <i class="pr-1.5 text-white fa-regular fa-calendar-days"></i>Horários
            </button>
            <button class="bg-black pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white">
              <i class="pr-1.5 text-white fa-solid fa-map-pin"></i>Local
            </button>
            <button class="bg-black pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] text-white">
              <i class="pr-1.5 text-white fa-solid fa-money-check-dollar"></i>Formas de Pagamento
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="m-auto w-full 2xl:columns-4 md:columns-4 sm:columns-2 gap-1.5 p-1.5">
        <div v-for="items in myGallery" class="mb-1.5 break-inside-avoid">
          <img class="w-full object-cover pointer-events-none" :src="items" alt="imagem" />
        </div>
      </div>
    </section>
    <section id="Service" class="selected">
      <div class='modal'>
        <nav>
          <ul>
            <li v-for="list in servi"><span>{{ list }}</span></li>
          </ul>
        </nav>
      </div>
    </section>
  </main>
</template>
<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: 0;
  right: 570px;
  top: 370px;
  bottom: 0;
  margin: auto;
  height: 200px;
  width: 200px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
  padding: 20px;
}

.selected {
  display: none;
}
</style>
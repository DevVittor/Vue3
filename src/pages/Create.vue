<script setup>
import formName from "../components/form/registerAcomp/formName.vue";
import formNascimento from "../components/form/registerAcomp/formNascimento.vue";
import formEmail from "../components/form/registerAcomp/formEmail.vue";
import formPassword from "../components/form/registerAcomp/formPassword.vue";
import formGen from "../components/form/registerAcomp/formGen.vue";
import formBody from "../components/form/registerAcomp/formBody.vue";
import formPeso from "../components/form/registerAcomp/formPeso.vue";
import formHeight from "../components/form/registerAcomp/formHeight.vue";
import formPeito from "../components/form/registerAcomp/formPeito.vue";
import formAss from "../components/form/registerAcomp/formAss.vue";
import formTattoo from "../components/form/registerAcomp/formTattoo.vue";
import formOculosAparelho from "../components/form/registerAcomp/formOculosAparelho.vue";
import formPelos from "../components/form/registerAcomp/formPelos.vue";
import formEtnia from "../components/form/registerAcomp/formEtnia.vue";
import formPrice from "../components/form/registerAcomp/formPrice.vue";
import formService from "../components/form/registerAcomp/formService.vue";
import formSpecial from "../components/form/registerAcomp/formSpecial.vue";
import formAtendimento from "../components/form/registerAcomp/formAtendimento.vue";
import formLocalAtendimento from "../components/form/registerAcomp/formLocalAtendimento.vue";
import formHorarios from "../components/form/registerAcomp/formHorarios.vue";
import formSobre from "../components/form/registerAcomp/formSobre.vue";
import formEstado from "../components/form/registerAcomp/formEstado.vue";
import formContact from "../components/form/registerAcomp/formContact.vue";
import formPagamento from "../components/form/registerAcomp/formPagamento.vue";
import formSocial from "../components/form/registerAcomp/formSocial.vue";
</script>
<template>
  <main>
    <section>
      <div class="container-form">
        <div class="box-form">
          <div class="box-info">
            <h2>Dados Pessoais</h2>
            <formName />
            <div class="flex justify-center items-center gap-[10px]">
              <formNascimento />
              <formContact />
            </div>
            <div class="container-gen-estado">
              <formGen />
              <formEstado />
            </div>
          </div>

          <div class="container-body">
            <h2>Corpo</h2>
            <div class="box-body">
              <formEtnia />
              <formBody />
              <formPeso />
              <formHeight />
              <formPeito />
              <formAss />
              <formPelos />
              <formOculosAparelho />
              <formTattoo />
            </div>
          </div>
          <div class="container-service">
            <h2>Serviços</h2>
            <div class="box-service">
              <formService />
            </div>
          </div>
          <div class="container-service-especial">
            <h2>Serviços Especiais</h2>
            <div class="box-service-especial">
              <formSpecial />
            </div>
          </div>
          <div class="container-atendimento">
            <h2>Atendimento</h2>
            <div class="box-atendimento">
              <formAtendimento />
              <formLocalAtendimento />
            </div>
          </div>
          <div class="container-horarios">
            <h2>Dias e Horários</h2>
            <div class="box-horarios">
              <formHorarios />
            </div>
          </div>
          <div class="container-horarios">
            <h2>Pagamento</h2>
            <div class="box-horarios">
              <formPrice />
              <formPagamento />
            </div>
          </div>
          <div class="container-horarios">
            <h2>Sobre</h2>
            <div class="box-horarios">
              <formSobre />
            </div>
          </div>

          <div class="">
            <input
              class="bg-black pr-[10px] pl-[10px] pt-[5px] pb-[5px] text-white font-semibold rounded-[3px]"
              type="submit"
              value="Cadastrar"
            />
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
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
  width: 100%;
  background: white;
}
.box-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 10px;
  border-radius: 5px;
}
.box-register {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: auto;
  padding: 20px 10px;
  border-radius: 5px;
  background: white;
  border: 1px solid #ddd;
}
.box-register h2 {
  font-size: 28px;
  font-weight: 600;
}
.box-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  padding: 20px 10px;
  border-radius: 5px;
  background: white;
  width: auto;
  gap: 10px;
  border: 1px solid #ddd;
}
.box-info h2 {
  font-size: 28px;
  font-weight: 600;
}
.container-body {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.container-body h2 {
  font-size: 28px;
  font-weight: 600;
}
.container-service {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.container-service h2 {
  font-size: 28px;
  font-weight: 600;
}
.container-service-especial {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.container-service-especial h2 {
  font-size: 28px;
  font-weight: 600;
}
.container-atendimento {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.container-atendimento h2 {
  font-size: 28px;
  font-weight: 600;
}
.container-horarios {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.container-horarios h2 {
  font-size: 28px;
  font-weight: 600;
}
.container-gen-estado {
  display: flex;
  align-items: center;
  gap: 10px;
}
@media screen and (max-width: 640px) {
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

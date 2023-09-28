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
</script>
<template>
  <main>
    <section>
      <div class="container-form">
        <div class="box-form">
          <formName />
          <formNascimento />
          <formEmail />
          <formPassword />
          <formGen />
          <formBody />
          <formPeso />
          <formHeight />
          <formPeito />
          <formAss />
          <formTattoo />
          <formOculosAparelho />
          <formPelos />
          <formEtnia />
          <formPrice />
          <formService />
          <formSpecial />
          <formAtendimento />
          <formLocalAtendimento />
          <formHorarios />
          <formSobre />
          <formEstado />
          <formContact />

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

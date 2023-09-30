<script setup>
import { ref, onMounted } from "vue";

const alturaDaPagina = ref(window.innerHeight - 75 + "px");

onMounted(() => {
    // Atualizar a altura quando a janela for redimensionada
    window.addEventListener("resize", () => {
        alturaDaPagina.value = window.innerHeight - 75 + "px";
    });
});
</script>
<template>
    <main>
        <section>
            <div class="container-publicar" :style="{ height: alturaDaPagina }">
                <div class="box-info">
                    <div>
                        <h3>Você é</h3>
                    </div>
                    <div class="box-input">
                        <select>
                            <option selected disabled hidden>Seu Gênero</option>
                            <option>Mulher</option>
                            <option>Homem</option>
                            <option>Trans</option>
                        </select>
                    </div>
                </div>
                <div class="box-info">
                    <div>
                        <h3>Estado</h3>
                    </div>
                    <div class="box-input">
                        <select>
                            <option selected disabled hidden>Estado</option>
                            <option>Rio de Janeiro</option>
                            <option>São Paulo</option>
                            <option>Minas Gerais</option>
                            <option>Brasília</option>
                        </select>
                    </div>
                </div>
                <div class="box-info">
                    <div>
                        <h3>Cidade</h3>
                    </div>
                    <div class="box-input">
                        <select>
                            <option selected disabled hidden>Cidade</option>
                            <option>Rio de Janeiro</option>
                            <option>São Gonsalo</option>
                            <option>Padre Miguel</option>
                            <option>Curicica</option>
                        </select>
                    </div>
                </div>
                <div class="box-info">
                    <div>
                        <h3>Contato</h3>
                    </div>
                    <div class="box-input">
                        <input
                            class="border-[1px] border-[#ddd] pr-[10px] pl-[10px] pt-[3px] pb-[3px]"
                            type="text"
                            placeholder="(21) 998674-189"
                        />
                    </div>
                </div>
                <div class="box-info">
                    <div>
                        <h3>Apresentação</h3>
                    </div>
                    <div class="box-input">
                        <div class="flex flex-col">
                            <label>Nome</label>
                            <input
                                class="border-[1px] border-[#ddd] pr-[10px] pl-[10px] pt-[3px] pb-[3px]"
                                type="text"
                            />
                        </div>
                    </div>
                    <div class="box-input">
                        <div class="flex flex-col">
                            <label>Idade</label>
                            <select>
                                <option>18</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                            </select>
                        </div>
                    </div>
                    <div class="box-input">
                        <div class="flex flex-col">
                            <label>Altura</label>
                            <select>
                                <option>18</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                            </select>
                        </div>
                    </div>
                    <div class="box-input">
                        <div class="flex flex-col">
                            <label>Tem Tatuagem ?</label>
                            <select>
                                <option>Sim</option>
                                <option>Não</option>
                            </select>
                        </div>
                    </div>
                    <div class="box-input">
                        <div class="flex flex-col">
                            <label>Usa ôculos ?</label>
                            <select>
                                <option>Sim</option>
                                <option>Não</option>
                            </select>
                        </div>
                    </div>
                    <div class="box-input">
                        <div class="flex flex-col">
                            <label>Usa Aparelho Bocal ?</label>
                            <select>
                                <option>Sim</option>
                                <option>Não</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="box-input flex-col">
                    <h2>Serviços</h2>
                    <div class="flex items-center gap-[10px]">
                        <label><input type="checkbox" /> Anal </label>
                        <label><input type="checkbox" /> Casal </label>
                        <label><input type="checkbox" /> Beijo Grego </label>
                        <label><input type="checkbox" /> Oral </label>
                        <label><input type="checkbox" /> Gozo Facial </label>
                        <label><input type="checkbox" /> Duplas </label>
                        <label><input type="checkbox" /> Trios </label>
                        <label><input type="checkbox" /> Suruba </label>
                        <label><input type="checkbox" /> Chuva Dourada </label>
                        <label>
                            <input type="checkbox" /> Garganta Profunda</label
                        >
                    </div>
                </div>
                <div class="box-input flex-col">
                    <h2>Silicone</h2>
                    <div class="flex items-center gap-[10px]">
                        <label><input type="checkbox" /> Não Tenho </label>
                        <label><input type="checkbox" /> Boca </label>
                        <label><input type="checkbox" /> Bunda </label>
                        <label><input type="checkbox" /> Peito </label>
                    </div>
                </div>
                <div class="box-input flex-col">
                    <h2>Atendo somente:</h2>
                    <div class="flex items-center gap-[10px]">
                        <label><input type="checkbox" /> Mulher</label>
                        <label><input type="checkbox" /> Homem </label>
                        <label><input type="checkbox" /> Trans </label>
                        <label><input type="checkbox" /> Casal </label>
                        <label
                            ><input type="checkbox" /> Deficiente Físico</label
                        >
                    </div>
                </div>
                <div class="box-input flex-col">
                    <h2>Aceito receber em:</h2>
                    <div class="flex items-center gap-[10px]">
                        <label><input type="checkbox" /> Dinheiro </label>
                        <label><input type="checkbox" /> Pix </label>
                        <label
                            ><input type="checkbox" /> Cartão de crédito
                        </label>
                        <label
                            ><input type="checkbox" /> Cartão de Débito
                        </label>
                    </div>
                </div>
                <div class="box-input flex-col">
                    <h2>Preço Hora:</h2>
                    <div class="flex items-center gap-[10px]">
                        <label>1 Hora <input type="number" /></label>
                        <label>3 Hora <input type="number" /></label>
                        <label>6 Hora <input type="number" /></label>
                        <label>12 Hora <input type="number" /></label>
                        <label>Pernoite <input type="number" min="30" /></label>
                    </div>
                </div>
                <div class="box-input flex-col">
                    <h2>Atendo em:</h2>
                    <div class="flex items-center gap-[10px]">
                        <label><input type="checkbox" /> Domicílio </label>
                        <label><input type="checkbox" /> Clube de Swing </label>
                        <label><input type="checkbox" /> Com local </label>
                        <label
                            ><input type="checkbox" /> Despedida de solteiro
                        </label>
                        <label><input type="checkbox" /> Motel </label>
                        <label><input type="checkbox" />Hotel </label>
                        <label
                            ><input type="checkbox" /> Festas e Eventos
                        </label>
                        <label
                            ><input type="checkbox" /> Jantar Romântico
                        </label>
                        <label
                            ><input type="checkbox" /> Viajens Nacionais</label
                        >
                        <label
                            ><input type="checkbox" /> Viajens
                            Internacionais</label
                        >
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
.container-publicar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: white;
}
.box-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.box-input {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>

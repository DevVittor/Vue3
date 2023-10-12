<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <RouterLink to="/2">
        <div class="card-profile">
            <img class="" loading="lazy"
                src="https://images.pexels.com/photos/15326936/pexels-photo-15326936/free-photo-of-sutia-inclinando-apoiando-lingerie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" />
            <div class="container-info-profile">
                <div class="bar-profile">
                    <div class="">
                        <span class="font-medium">R$ 450/H</span>
                    </div>
                    <div class="boost-profile">
                        <div class="">
                            <i class="text-blue-500 text-[20px] ri-verified-badge-fill"></i>
                        </div>
                        <div class="">
                            <i class="text-[20px] text-red-500 ri-flashlight-fill"></i>
                        </div>
                        <div>
                            <i class="text-[20px] text-green-500 ri-shield-check-fill"></i>
                        </div>
                        <div>
                            <i class="text-[20px] ri-women-line"></i>
                        </div>
                    </div>
                </div>
                <div class="box-info-profile">
                    <div>
                        <h2 class="text-white font-semibold">Jéssica Gomes</h2>
                    </div>
                    <div class="">
                        <button href="/2"
                            class="bg-black text-white font-semibold text-[17px] pr-[10px] pl-[10px] pt-[3px] pb-[3px] rounded-[3px]"><i
                                class="pr-1.5 ri-eye-line"></i>Acessar</button>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>
<style scoped>
.card-profile {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 430px;
    width: 250px;
    border-radius: 12px;
}

.card-profile img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
    pointer-events: none;
}

.container-info-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
    height: 430px;
    width: 250px;

}

.bar-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding-right: 10px;
    padding-left: 10px;
    height: 35px;
    margin: 10px;
    background: white;
    border-radius: 3px;
}

.boost-profile {
    display: flex;
    align-items: center;
    gap: 5px;
}

.box-info-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(15px);
    height: auto;
    width: 100%;
    gap: 3px;
    padding: 8px 5px;
    border-radius: 0px 0px 3px 3px;
}
</style>

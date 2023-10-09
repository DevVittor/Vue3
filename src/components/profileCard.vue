<script setup></script>
<template>
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
                        <i class="text-[20px] ri-women-line"></i>
                    </div>
                </div>
            </div>
            <div class="box-info-profile">
                <div class="">
                    <h2 class="text-[18px] font-medium">Julia Gomes, 30</h2>
                </div>
                <div>
                    <span class="text-gray-700"><i class="pr-1.5 text-red-500 ri-map-pin-line"></i>Rio
                        de Janeiro, Rj</span>
                </div>
                <div>
                    <button class="bg-black pr-[15px] pl-[15px] pt-[3px] pb-[3px] rounded-[3px] text-white">
                        <i class="pr-1.5 text-white ri-eye-2-line"></i>Ver Mais
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card-profile {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background: red;
    height: 430px;
    width: 250px;
    border-radius: 12px;
}

.card-profile img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
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
    border-radius: 12px;
    padding: 10px;
}

.bar-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    height: 35px;
    width: 100%;
    background: white;
    border-radius: 12px;
}

.boost-profile {
    display: flex;
    align-items: center;
    gap: 5px;
}

.box-info-profile {
    display: none;
}

.container-info-profile:hover .box-info-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3px;
    height: auto;
    width: 100%;
    background: white;
    border-radius: 3px;
    padding: 5px;
    animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-bck-center {
    0% {
        transform: translateZ(600px);
        opacity: 0;
    }

    100% {
        transform: translateZ(0);
        opacity: 1;
    }
}
</style>

<script setup></script>
<template>
    <section>
        <div class="container-search">
            <div class="box-filter">
                <button><i class="ri-sound-module-line"></i></button>
            </div>
            <div class="box-search">
                <input type="text" name="" id="" placeholder="Buscar">
                <button type="submit"><i class="ri-search-eye-line"></i></button>
            </div>
            <div class="box-select-filter">
                <select name="select">
                    <option value="destaque" selected>Destaque</option>
                    <option value="verificada" >Verificada</option>
                    <option value="novidade">Novidade</option>
                </select>
            </div>
        </div>
    </section>
</template>
<style scoped>

.container-search{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 55px;
}
.box-filter button{
    padding: 5px 20px ;
    color: #212121;
    font-weight: 600;
    font-size: 14px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 3px;
}
.box-search{
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 3px;
}
.box-search input[type="text"]{
    border: none;
    padding:5px 10px;
    font-weight: 500;
    font-size: 16px;
    color: #212121;
    outline: none;
}
.box-search button[type="submit"]{
    border: none;
    padding:5px 10px;
    font-weight: 500;
    font-size: 16px;
    color: #212121;
    outline: none;
    background: white;
}
.box-select-filter select{
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    background: white;
    outline: none;
}
.ri-flashlight-fill{
    color: #FEFF86;
}
</style>
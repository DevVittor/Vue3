<script setup>
import Card from './Card.vue';

document.title = "Jéssica Gomes"
</script>
<template>
    <section>
        <div class="container-profile">
            <div class="box-1">
                <div class="box-profile">
                    <div class="one">
                        <div class="one-1"></div>
                        <div class="one-2"></div>
                    </div>
                    <div class="two">
                        <div class="two-1"></div>
                        <div class="two-2"></div>
                    </div>
                </div>
                <div class="tres">
                    <div class="tres-1"></div>
                </div>
            </div>
            <div class="box-2">
                <div class="tres">
                    <div class="tres-4"></div>
                </div>
                <div class="box-profile2">
                    <div class="one-3">
                        <div class="one-4"></div>
                        <div class="one-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-gallery">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
</template>
<style scoped>
.container-profile{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
}
.box-1{
    display: flex;
    align-items: flex-start;
    height: auto;
    width: auto;
    gap: 5px;
}
.box-2{
    display: flex;
    align-items: flex-start;
    height: auto;
    width: auto;
    gap: 5px;
}
.box-profile{
    display: flex;
    flex-direction: column;
    gap: 5px;
    
}
.box-profile2{
    display: flex;
    flex-direction: column;
    gap: 5px;
    
}
.one{
    display: flex;
    gap: 5px;
}
.one-1{
    height: 250px;
    width: 250px;
    background: green;
    border-radius: 12px;
}
.one-2{
    height: 250px;
    width: 500px;
    background: red;
    border-radius: 12px;
}
.one-3{
    display: flex;
    gap: 5px;
}
.one-4{
    height: 250px;
    width: 250px;
    background: blue;
    border-radius: 12px;
}
.one-5{
    height: 250px;
    width: 500px;
    background: gray;
    border-radius: 12px;
}
.two{
    display: flex;
    gap: 5px;
}
.two-1{
    height: 250px;
    width: 350px;
    background: yellow;
    border-radius: 12px;
}
.two-2{
    height: 250px;
    width: 400px;
    background: black;
    border-radius: 12px;
}
.tres{
    display: flex;
    align-items: center;
}
.tres-1{
    height: 505px;
    width: 250px;
    background: pink;
    border-radius: 12px;
}
.tres-4{
    height: 250px;
    width: 250px;
    background: orange;
    border-radius: 12px;
}
.container-gallery{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
}
</style>
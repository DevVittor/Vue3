<script setup>
import Card from '../components/Card.vue'
import Filter from './Filter.vue';
</script>
<template>
    <Filter/>
    <section>
        <div class="container-card">
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
.container-card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
}

</style>
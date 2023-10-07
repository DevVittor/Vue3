<script setup>
import profileCard from "../components/profileCard.vue";
import Filter from "../components/Filter.vue";
import FilterBtn from "../components/FilterBtn.vue";
</script>
<template>
    <section>
        <div class="container-banner">
            <div class="box-banner"></div>
        </div>
    </section>

    <section>
        <div class="container-filter-gen">
            <div class="box-filter-gen">
                <Filter />
                <FilterBtn />
            </div>
        </div>
    </section>
    <section>
        <div class="container-card-profile">
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
            <profileCard />
        </div>
    </section>
</template>
<style scoped>
.container-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
}
.box-banner {
    background: red;
    height: 350px;
    width: 800px;
    border-radius: 12px;
}
.container-filter-gen {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
}
.box-filter-gen {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.container-card-profile {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    height: 100%;
    width: auto;
    padding-top: 0;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>

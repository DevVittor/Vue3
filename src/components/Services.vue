<script setup></script>
<template>
    <div class="slider">
        <div class="slider-track">
            <div class="slide">
                <nav>
                    <ul>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>
                        <li>OLá Mundo</li>

                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
<style scoped>
.slider {
    position: relative;
    overflow: hidden;
    height: auto;
    padding: 10px 0;
    width: 100%;
    margin: auto;
    background: white;
}

.slider-track {
    display: flex;
    align-items: center;
    width: 950px;
}

.slide,
.slide ul {
    display: flex;
    align-items: center;
    gap: 10px;
}

.slide li {
    background: red;
    min-width: 100px;
    width: auto;
    max-width: 300px;
    text-align: center;
}

@keyframes scroll {
    from {
        transform: translateX(0px);
    }

    to {
        transform: translateX(-100%);
    }
}

.slider-track {
    animation: scroll 30s linear infinite;
    display: flex;
    width: 960px;
}
</style>
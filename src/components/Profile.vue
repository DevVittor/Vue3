<script setup>
document.title = "Jéssica Gomes"
</script>
<template>
    <section>
        <div class="container-profile">
            <div class="box-profile">
                <div class="profile-name">
                    <div class="box-name">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia iure commodi tempore a quasi, dicta sed, repudiandae nemo facere impedit ratione debitis inventore excepturi? Incidunt beatae cum nemo porro!</p>
                        <div class="box-social">
                            <nav>
                                <ul>
                                    <li><a href="#" target="_blank"><i class="ri-facebook-box-fill"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="ri-facebook-box-fill"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="ri-facebook-box-fill"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="ri-facebook-box-fill"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="ri-facebook-box-fill"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="profile-map"></div>
                <div class="profile-body"></div>
                <div class="profile-services"></div>
                <div class="profile-video"></div> 
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-profile{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.box-profile{
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width:1000px;
}
.profile-name{
    height: 250px;
    width: 75%;
    border: 1px solid #ddd;
    padding: 5px;
}
.box-name{
    background: white;
    height: 100%;
    width: 100%;
    
}
.box-social ul{
    display: flex;
    align-items: center;
    gap:3px;
}
.box-social a{
    color: #212121;
    font-size: 24px;
}
.profile-map{
    height: 250px;
    width: 25%;
    background: blue;
    padding: 5px;
}
.profile-body{
    height: 250px;
    width: 25%;
    background: green;
    padding: 5px;
}
.profile-services{
    height: 250px;
    width: 25%;
    background: pink;
    padding: 5px;
}
.profile-video{
    height: 250px;
    width: 50%;
    background: yellow;
    padding: 5px;
}
</style>
<template>
    <div>
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <input type="file" name="image" accept="image/*" @change="updateImage" />
            <input type="submit" value="Enviar" />
        </form>
        <img v-if="imageUrl" :src="'/uploads/' + imageUrl" alt="Uploaded Image" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: null,
            formData: null,
        };
    },
    methods: {
        updateImage(event) {
            this.formData = new FormData();
            this.formData.append("image", event.target.files[0]);
        },
        submitForm() {
            // Substitua a URL pelo endpoint do seu servidor Node.js para lidar com o upload
            const uploadUrl = "http://localhost:5173/upload"; // Corrigido para a porta correta

            // Faça uma solicitação HTTP para enviar o formulário para o servidor
            fetch(uploadUrl, {
                method: "POST",
                body: this.formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    this.imageUrl = data.imageUrl;
                })
                .catch((error) => {
                    console.error("Erro no upload: ", error);
                });
        },
    },
};
</script>

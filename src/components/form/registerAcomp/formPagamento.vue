<script setup></script>
<template>
    <div class="column-pagamento">
        <label>Aceito receber:</label>
        <div class="row-pagamento">
            <span class="check-pagamento">
                <input type="checkbox" name="" />
                Dinheiro
            </span>
            <span class="check-pagamento">
                <input type="checkbox" name="" />
                Pix
            </span>
            <span class="check-pagamento">
                <input type="checkbox" name="" />
                Cartão de Crédito
            </span>
            <span class="check-pagamento">
                <input type="checkbox" name="" />
                Cartão de Débito
            </span>
        </div>
    </div>
</template>
<style scoped>
.column-pagamento {
    display: flex;
    flex-direction: column;
}
.row-pagamento {
    display: flex;
    align-items: center;
    gap: 10px;
}
.check-pagamento {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>

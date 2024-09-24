<template>
    <div class="h-auto bg-slate-800 border border-slate-700 rounded-md flex flex-col items-center w-3/5 gap-4 p-4">
        <h1 class="text-slate-200 font-semibold text-lg">Teste</h1>
        <Form :arrayDeInputs="inputs"/>
    </div>
</template>

<script setup lang="ts">

const inputs = [
    {
        'tipo': 'text',
        'label': 'Email',
        'validacao': 'email'
    },
    {
        'tipo': 'password',
        'label': 'Senha',
        'validacao': 'password'
    },
    {
        'tipo': 'text',
        'label': 'CPF',
        'validacao': 'cpf'
    },
    {
        'tipo': 'text',
        'label': 'CNPJ',
        'validacao': 'cnpj'
    },
    {
        'tipo': 'text',
        'label': 'Telefone',
        'validacao': 'telefone'
    },
    {
        'tipo': 'text',
        'label': 'CEP',
        'validacao': 'cep'
    },
    {
        'tipo': 'text',
        'label': 'Data',
        'validacao': 'data'
    },
    {
        'tipo': 'text',
        'label': 'Hora',
        'validacao': 'hora'
    },
    {
        'tipo': 'text',
        'label': 'Número de Cartão de Crédito',
        'validacao': 'cartao_credito'
    },
    {
        'tipo': 'text',
        'label': 'RG',
        'validacao': 'rg'
    },
    {
        'tipo': 'text',
        'label': 'Valor Monetário',
        'validacao': 'valor_monetario'
    },
    {
        'tipo': 'text',
        'label': 'Percentual',
        'validacao': 'percentual'
    },
    {
        'tipo': 'text',
        'label': 'Número de Conta Bancária/Agência',
        'validacao': 'conta_bancaria'
    }
];


</script>

<style scoped>

</style>
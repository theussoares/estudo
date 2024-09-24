<template>
    <div class="w-full">
        <form class="w-full flex flex-col items-center gap-4">
            <Input v-for="(input, index) in props.arrayDeInputs" :tipo="input.tipo" :label="input.label" :validacao="input.validacao" :key="index"/>
            <button class="bg-blue-600 w-3/5 py-2 rounded-md font-medium text-slate-200 text-lg">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
export interface Input {
    tipo?: string;
    label?: string;
    validacao?: string;
}

interface Props {
    arrayDeInputs: Input[];
}

const props = defineProps<Props>()

</script>

<style scoped>

</style>
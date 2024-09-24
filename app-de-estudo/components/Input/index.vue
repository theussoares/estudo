<template>
    <div class="w-full">
        <label for="" class="text-slate-200">{{ props.label }}</label>
        <input 
            v-model="inputValue" 
            @input="handleInput($event)" 
            :type="props.tipo" 
            class="w-full rounded-sm bg-slate-400 border border-slate-500 py-1 focus:ring-1 focus:ring-blue-700 focus:outline-none p-1"
        />
    </div>
</template>

<script setup lang="ts">

interface Props {
    tipo?: string;
    label?: string;
    validacao?: string;
}

const { applyMask, maskedValue } = useMask();

const props = defineProps<Props>();

const inputValue = ref(''); 

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  inputValue.value = target.value;

  applyMask(props.validacao, inputValue.value);
  inputValue.value = maskedValue.value; 
};
</script>

<style scoped>

</style>

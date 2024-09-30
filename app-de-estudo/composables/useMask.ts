import masks from "~/utils";

export const useMask = () => {
  const maskedValue = ref('')

  const applyMask = (field: keyof typeof masks, value: string) => {
    if (typeof masks[field] === 'function') {
      maskedValue.value = masks[field](value)
    }
    else maskedValue.value = value; // Caso não haja máscara específica
  }
    return {
      applyMask,
      maskedValue,
    };
  };



  //erro de tipagem ao acessar uma key de um objeto de forma dinamica com string
  //solução tipar a string como chave pertencento do objeto, de forma mais segura
  //emitindo erro de tipagem ao passar uma string que não esta dentro desse objeto
  //const access = (str: keyof typeof myObj) => {
  //return myObj[str];
  //}; 
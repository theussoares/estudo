import mask from "~/utils";

export const useMask = () => {
  const maskedValue = ref('')

  const applyMask = (field: string, value: string) => {
    switch (field) {
      case 'cpf':
        maskedValue.value = mask.cpfMask(value); // Máscara para CPF
        break;
      case 'cnpj':
        maskedValue.value = mask.cnpjMask(value); // Máscara para CNPJ
        break;
      case 'telefone':
        maskedValue.value = mask.telefoneMask(value); // Máscara para Telefone
        break;
      case 'cep':
        maskedValue.value = mask.cepMask(value); // Máscara para CEP
        break;
      case 'data':
        maskedValue.value = mask.dataMask(value); // Máscara para Data (DD/MM/AAAA)
        break;
      case 'hora':
        maskedValue.value = mask.horaMask(value); // Máscara para Hora (HH:MM)
        break;
      case 'cartao_credito':
        maskedValue.value = mask.cartaoCreditoMask(value); // Máscara para Número de Cartão de Crédito
        break;
      case 'rg':
        maskedValue.value = mask.rgMask(value); // Máscara para Documentos (RG, Passaporte)
        break;
      case 'valor_monetario':
        maskedValue.value = mask.valorMonetarioMask(value); // Máscara para Valor Monetário (R$ 1.000,00)
        break;
      case 'percentual':
        maskedValue.value = mask.percentualMask(value); // Máscara para Percentuais (99%)
        break;
      case 'conta_bancaria':
        maskedValue.value = mask.contaBancariaMask(value); // Máscara para Conta Bancária/Agência
        break;
      case 'email':
        maskedValue.value = value; // Sem máscara específica para Email
        break;
      case 'password':
        maskedValue.value = value; // Sem máscara específica para Senha
        break;
      default:
        maskedValue.value = value; // Caso não haja máscara específica
    }
  };

  return {
    applyMask,
    maskedValue,
  };
};

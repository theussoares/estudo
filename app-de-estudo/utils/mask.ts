// CPF Mask (###.###.###-##)
export const cpfMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
};

// CNPJ Mask (##.###.###/####-##)
export const cnpjMask = (value: string) => {
    // Remove todos os caracteres que não sejam dígitos
    value = value.replace(/\D/g, '');

    // Aplicar a máscara de CNPJ
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');

    return value;
};

export function cpfcnpjMask(value: string) {
  value = value.replace(/[^0-9]+/g, "");

  if (value.length <= 11) {
    return cpfMask(value);
  } else {
    return cnpjMask(value);
  }
}

// RG Mask (##.###.###-#)
export const rgMask = (value: string) => {
    // Remove todos os caracteres que não sejam dígitos
    value = value.replace(/\D/g, '');

    // Aplicar a máscara de RG
    value = value.replace(/(\d{2})(\d)/, '$1.$2'); // Primeiro ponto após os dois primeiros dígitos
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Segundo ponto após os próximos três dígitos
    value = value.replace(/(\d{3})(\d{1})$/, '$1-$2'); // Hífen antes do dígito verificador

    return value;
};

export function onlyNumberMask(value: string) {
    return value.toString().replace(/[^0-9]/g, "");
}

// Telefone Mask (exemplo: (##) #####-####)
export const telefoneMask = (value: string) => {
    // Remove todos os caracteres que não sejam números
    value = value.replace(/\D/g, '');

    // Limita o número a no máximo 9 dígitos
    value = value.substring(0, 11);

    // Aplica a máscara para o número de telefone com DDD
    if (value.length > 5) {
        // Formato com DDD e hífen
        value = value.replace(/(\d{2})(\d{5})(\d{2})/, '($1) $2-$3');
    } else if (value.length > 2) {
        // Formato com DDD mas sem hífen
        value = value.replace(/(\d{2})(\d+)/, '($1) $2');
    }

    return value;
};

export const cvvMask = (value: string) => {
  // Remove qualquer caractere que não seja número
  value = value.replace(/[^0-9]/g, "");

  // Limita o valor a no máximo 4 dígitos (para cartões que aceitam 3 ou 4)
  return value.slice(0, 4);
};

// CEP Mask (#####-###)
export const cepMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca o hífen no CEP
    return value;
};

// Data Mask (DD/MM/AAAA)
export const dataMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{2})(\d)/, '$1/$2'); // Coloca a barra após o dia
    value = value.replace(/(\d{2})(\d)/, '$1/$2'); // Coloca a barra após o mês
    return value;
};

// Hora Mask (HH:MM ou HH:MM:SS)
export const horaMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{2})(\d)/, '$1:$2'); // Coloca os dois pontos após as horas
    if (value.length > 5) { // Caso seja HH:MM:SS
        value = value.replace(/(\d{2})(\d)/, '$1:$2'); // Coloca os dois pontos após os minutos
    }
    return value;
};

// Cartão de Crédito Mask (#### #### #### ####)
export const cartaoCreditoMask = (value: string) => {
    // Remove todos os caracteres que não sejam números
    value = value.replace(/\D/g, '');

    // Limita o número de dígitos a 16
    value = value.substring(0, 16);

    // Aplica a máscara de cartão de crédito (blocos de 4 dígitos, até 16 dígitos)
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    return value.trim(); // Remove espaço no final, se houver
};

export const cartaoCreditoNomeMask = (value: string) => {
  value = value?.replace(
    /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/g,
    ""
  );

  return value.toUpperCase();
};

export const cartaoCreditoDataMask = (value: string) => {
  // Remove tudo que não for número e limita a 4 dígitos
  value = value.replace(/[^0-9]/g, "").slice(0, 4);

  // Aplica a máscara apenas se o valor tiver mais de 2 dígitos
  if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,2})/, "$1/$2");
  }

  return value;
};


export const valorMonetarioMask = (value: string): string => {
    // Remove todos os caracteres que não sejam dígitos ou o sinal de negativo
    value = value.replace(/[^0-9-]/g, '');

    // Se o valor estiver vazio após a remoção, retorna uma string vazia
    if (value === '') {
        return '';
    }

    // Verifica se o primeiro caractere é um sinal de negativo
    let isNegative = false;
    if (value[0] === '-') {
        isNegative = true;
        value = value.substring(1);

        // Se o valor após remover o '-' estiver vazio, define value como '0' e isNegative como false
        if (value === '') {
            value = '';
            isNegative = false;
        }
    }

    // Remove zeros à esquerda
    value = value.replace(/^0+/, '');

    // Se o valor estiver vazio após remover zeros à esquerda, define como '0'
    if (value === '') {
      isNegative = false
        value = '';
    }

    // Se o valor tiver menos de 3 dígitos, preenche com zeros à esquerda
    if (value.length < 3) {
        value = value.padStart(3, '0');
    }

    // Separa a parte inteira da parte decimal
    let integerPart = value.slice(0, -2);
    let decimalPart = value.slice(-2);

    // Insere pontos como separadores de milhares na parte inteira
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Combina a parte inteira com a parte decimal
    let formattedValue = integerPart + ',' + decimalPart;

    // Adiciona o sinal negativo se necessário
    if (isNegative) {
        formattedValue = 'R$ -' + formattedValue;
    } else {
        formattedValue = 'R$ ' + formattedValue;
    }

    return formattedValue;
};



// export const valorMonetarioMask = (value: string): string => {
//     // Remove todos os caracteres que não sejam dígitos ou o sinal de negativo
//     value = value.replace(/[^0-9-]/g, '');

//     // Verifica se o primeiro caractere é um sinal de negativo
//     let isNegative = false;
//     if (value[1] === ('-')) {
//       console.log(value)
//         isNegative = true;
//         value = value.substring(1);
//     }

//     // Remove zeros à esquerda
//     value = value.replace(/^0+/, '');

//     // Se o valor estiver vazio, retorna uma string vazia
//     if (value === '') {
//         return '';
//     }

//     // Se o valor tiver menos de 3 dígitos, preenche com zeros à esquerda
//     if (value.length < 3) {
//         value = value.padStart(3, '0');
//     }

//     // Separa a parte inteira da parte decimal
//     let integerPart = value.slice(0, -2);
//     let decimalPart = value.slice(-2);

//     // Insere pontos como separadores de milhares na parte inteira
//     integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

//     // Combina a parte inteira com a parte decimal
//     let formattedValue = integerPart + ',' + decimalPart;

//     // Adiciona o sinal negativo se necessário
//     if (isNegative) {
//       console.log(isNegative, value, formattedValue)
//       formattedValue = 'R$ ' + formattedValue;
//     }
//     else formattedValue = 'R$ ' + formattedValue;

//     return formattedValue;
// };

export const ufMask = (value: string) => {
  value = value.replace(/[^a-zA-Z]/g, '');
  
  if (value.length > 2) {
    value = value.substring(0, 2);
  }
  
  return value.toUpperCase();
};

// Percentual Mask (99%)
export const percentualMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    return value + '%'; // Adiciona o símbolo de porcentagem
};

// Conta Bancária Mask (exemplo: ######-# ou #####-#)
export const contaBancariaMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{5,6})(\d)/, '$1-$2'); // Coloca o hífen no final
    return value;
};

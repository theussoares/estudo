// CPF  (###.###.###-##)
export const cpf = (cpf: string) => {
    var num = cpf.replace(/[^\d]/g, "");
    var len = num.length;

    if (len > 11) {
        num = num.substring(0, 11);
    }

    if (len <= 6) {
        cpf = num.replace(/(\d{3})(\d{1,3})/g, "$1.$2");
    } else if (len <= 9) {
        cpf = num.replace(/(\d{3})(\d{3})(\d{1,3})/g, "$1.$2.$3");
    } else {
        cpf = num.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, "$1.$2.$3-$4");
    }

    return cpf;
};

export const maskCpf = (value: string) => {
    value = cpf(value);

    const last4Digits = value.slice(-6);
    const maskedCpf = last4Digits.padStart(value.length, "*");

    return maskedCpf;
};

// CNPJ  (##.###.###/####-##)
export const cnpj = (cnpj: string) => {
    cnpj = cnpj?.replace(/[^0-9]+/g, "");

    cnpj = cnpj.substring(0, 14);

    if (cnpj.length <= 2) {
        return cnpj;
    } else if (cnpj.length <= 5) {
        return cnpj.replace(/(\d{2})(\d{0,3})/, "$1.$2");
    } else if (cnpj.length <= 8) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (cnpj.length <= 12) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, "$1.$2.$3/$4");
    } else {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, "$1.$2.$3/$4-$5");
    }
};

export function cpfcnpj(value: string): string {
    value = value.replace(/[^0-9]+/g, "");

    if (value.length <= 11) {
        return cpf(value);
    } else {
        return cnpj(value);
    }
}

// RG  (##.###.###-#)
export const rg = (value: string): string => {
    // Remove todos os caracteres que não sejam dígitos
    value = value.replace(/\D/g, '');

    // Limita o valor a no máximo 9 dígitos
    value = value.substring(0, 9);

    // Aplicar a máscara de RG
    value = value.replace(/(\d{2})(\d)/, '$1.$2'); // Primeiro ponto após os dois primeiros dígitos
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Segundo ponto após os próximos três dígitos
    value = value.replace(/(\d{3})(\d{1})$/, '$1-$2'); // Hífen antes do dígito verificador

    return value;
};

export function number(value: string) {
    return value.toString().replace(/[^0-9]/g, "");
}

// Telefone  (exemplo: (##) #####-####)
export const phone = (value: string): string => {
    // Remove todos os caracteres que não sejam números
    value = value.replace(/\D/g, '');

    // Limita o número a no máximo 11 dígitos
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

export const cvv = (value: string): string => {
    value = value?.replace(/[^0-9]+/g, "");

    return value.replace(/(\d{3,4})/, "$1");
};

// CEP  (#####-###)
export const zipCode = (value: string): string => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.substring(0, 8);
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca o hífen no CEP
    return value;
};

// Data  (DD/MM/AAAA)
export const dateOfBirth = (value: string): string => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    value = value.substring(0, 8);

    if (value.length >= 5) {
        value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'); // Formata como DD/MM/AAAA
    } else if (value.length >= 3) {
        value = value.replace(/(\d{2})(\d{2})/, '$1/$2'); // Formata como DD/MM
    } else if (value.length >= 1) {
        value = value.replace(/(\d{2})/, '$1'); // Formata como DD
    }

    return value;
};

// Hora  (HH:MM ou HH:MM:SS)
export const hour = (value: string): string => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.substring(0, 4);
    value = value.replace(/(\d{2})(\d)/, '$1:$2'); // Coloca os dois pontos após as horas
    if (value.length > 5) { // Caso seja HH:MM:SS
        value = value.replace(/(\d{2})(\d)/, '$1:$2'); // Coloca os dois pontos após os minutos
    }
    return value;
};

// Cartão de Crédito  (#### #### #### ####)
export const creditCardNumber = (value: string): string => {
    // Remove todos os caracteres que não sejam números
    value = value.replace(/\D/g, '');

    // Limita o número de dígitos a 16
    value = value.substring(0, 16);

    // Aplica a máscara de cartão de crédito (blocos de 4 dígitos, até 16 dígitos)
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    return value.trim(); // Remove espaço no final, se houver
};

export const creditCardName = (value: string): string => {
  value = value?.replace(
    /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/g,
    ""
  );

  return value.toUpperCase();
};

export const creditCardDate = (value: string): string => {
  // Remove tudo que não for número e limita a 4 dígitos
  value = value.replace(/[^0-9]/g, "").slice(0, 4);

  // Aplica a máscara apenas se o valor tiver mais de 2 dígitos
  if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,2})/, "$1/$2");
  }

  return value;
};

export const formatCurrency = (value: string): string => {
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

// export function formatCurrency(value: number) {
//     return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
// }

export const uf = (value: string): string => {
  value = value.replace(/[^a-zA-Z]/g, '');
  
  if (value.length > 2) {
    value = value.substring(0, 2);
  }
  
  return value.toUpperCase();
};

// Percentual  (99%)
export const percentage = (value: string): string => {1
    value = value.replace(/[^0-9,.]/g, '') + '%';

    // Garantir que apenas um separador decimal seja permitido
    const parts = value.split(/[,\.]/); // Permite vírgula ou ponto como separador
    if (parts.length > 2) {
        value = `${parts[0]},${parts[1]}`; // Reúne a parte antes e depois do separador decimal
    }
    return value ; // Adiciona o símbolo de porcentagem
};

// Conta Bancária  (exemplo: ######-# ou #####-#)
export const bankAccount = (value: string): string => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.substring(0, 7);
    value = value.replace(/(\d{5,6})(\d)/, '$1-$2'); // Coloca o hífen no final
    return value;
};

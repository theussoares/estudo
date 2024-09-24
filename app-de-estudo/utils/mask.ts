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

// Telefone Mask (exemplo: (##) #####-####)
export const telefoneMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{2})(\d)/, '($1) $2'); // Coloca parênteses no DDD
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca o hífen no número
    return value;
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
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{4})(\d)/g, '$1 $2'); // Agrupa os números em blocos de 4
    return value.trim();
};

// Valor Monetário Mask (R$ 1.000,00)
export const valorMonetarioMask = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = (parseInt(value) / 100).toFixed(2) + ''; // Formata como valor monetário
    value = value.replace('.', ','); // Substitui o ponto por vírgula
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // Coloca os pontos dos milhares
    return 'R$ ' + value;
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

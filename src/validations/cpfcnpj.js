export const validacaoCpfCnpj = value => {
    const cpfcnpj = value.replace(/[^\d]+/g, '');

    if (cpfcnpj.length === 11) {
        if (
            !cpfcnpj ||
            cpfcnpj.length !== 11 ||
            cpfcnpj === '00000000000' ||
            cpfcnpj === '11111111111' ||
            cpfcnpj === '22222222222' ||
            cpfcnpj === '33333333333' ||
            cpfcnpj === '44444444444' ||
            cpfcnpj === '55555555555' ||
            cpfcnpj === '66666666666' ||
            cpfcnpj === '77777777777' ||
            cpfcnpj === '88888888888' ||
            cpfcnpj === '99999999999'
        ) {
            return false;
        }
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpfcnpj.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpfcnpj.substring(9, 10))) {
            return false;
        }
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpfcnpj.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpfcnpj.substring(10, 11))) {
            return false;
        }
        return true;
    }

    return true;

    // if (cpfcnpj.length === 14) {
    //     if (cpfcnpj === '') {
    //         alert('1');
    //         return false;
    //     }

    //     if (cpfcnpj.length !== 14) {
    //         alert('2');
    //         return false;
    //     }

    //     // Elimina CNPJ invalidos conhecidos
    //     if (
    //         cpfcnpj === '00000000000000' ||
    //         cpfcnpj === '11111111111111' ||
    //         cpfcnpj === '22222222222222' ||
    //         cpfcnpj === '33333333333333' ||
    //         cpfcnpj === '44444444444444' ||
    //         cpfcnpj === '55555555555555' ||
    //         cpfcnpj === '66666666666666' ||
    //         cpfcnpj === '77777777777777' ||
    //         cpfcnpj === '88888888888888' ||
    //         cpfcnpj === '99999999999999'
    //     ) {
    //         alert('3');
    //         return false;
    //     }

    //     // Valida DVs
    //     let tamanho = cpfcnpj.length - 2;
    //     let numeros = cpfcnpj.substring(0, tamanho);
    //     const digitos = cpfcnpj.substring(tamanho);
    //     let soma = 0;
    //     let pos = tamanho - 7;
    //     for (let i = tamanho; i >= 1; i--) {
    //         soma += numeros.charAt(tamanho - i) * pos--;
    //         if (pos < 2) {
    //             pos = 9;
    //         }
    //     }
    //     let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    //     if (resultado !== digitos.charAt(0)) {
    //         alert('4');
    //         return false;
    //     }

    //     tamanho += 1;
    //     numeros = cpfcnpj.substring(0, tamanho);
    //     soma = 0;
    //     pos = tamanho - 7;
    //     for (let i = tamanho; i >= 1; i--) {
    //         soma += numeros.charAt(tamanho - i) * pos--;
    //         if (pos < 2) {
    //             pos = 9;
    //         }
    //     }
    //     resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    //     if (resultado !== digitos.charAt(1)) {
    //         alert('5');
    //         return false;
    //     }

    //     return true;
    // }
};

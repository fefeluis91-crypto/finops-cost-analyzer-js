import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.jest // ADICIONE ISSO: Agora o Linter aceita 'test' e 'expect'
            }
        },
        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'], // Aqui é onde ele exige aspas simples
            'semi': ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': 'off'
        }
    }
];
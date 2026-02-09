import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node, // Isso avisa que 'require', 'process', etc. existem
                ...globals.browser // Isso avisa que 'window', 'document', etc. existem
            }
        },
        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': 'off' // Liberamos o console.log para os seus testes
        }
    }
];
//eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    plugins: ['jest', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-var': 'error',
        'prettier/prettier': [
            // 'error',
            {
                singleQuote: true,
            },
        ],
    },
};

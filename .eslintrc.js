module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js에서는 React import 불필요
    'react/no-unescaped-entities': ['off'],
    'no-empty-pattern': ['off'],
    'no-useless-catch': ['off'],
    'react/prop-types': ['off'],
    'exhaustive-deps': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-empty': 'error',
    // 'no-unused-vars':'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^(name|_.*)$', // 'name' 또는 '_'로 시작하는 모든 변수 무시
        argsIgnorePattern: '^_', // 이름이 '_'로 시작하는 인자 무시
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'table'] }],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

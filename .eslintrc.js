const globalRules = {
  'react/jsx-props-no-spreading': 'off',
  'react/no-unescaped-entities': 'off',
  'import/prefer-default-export': 'off',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^\\u0000'],
        ['^node:'],
        ['^react(/.+)?$', '^next(/.+)?$', '^@?\\w'],
        ['^'],
        ['^\\.'],
      ],
    },
  ],
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/no-null': 'off',
  'unicorn/no-array-callback-reference': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/prefer-number-properties': 'off',
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/new-for-builtins': 'off',
  'sonarjs/prefer-single-boolean-return': 'error',
  'sonarjs/no-nested-template-literals': 'error',
  'sonarjs/no-element-overwrite': 'error',
};

module.exports = {
  extends: ['airbnb', 'plugin:unicorn/recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort', 'sonarjs'],
  rules: {
    ...globalRules,
    'no-console': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['./*.js'],
      rules: {
        'unicorn/prefer-module': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.ts?(x)'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:unicorn/recommended',
        'next/core-web-vitals',
        'prettier',
      ],
      rules: {
        ...globalRules,
        'no-console': 'off',
        'global-require': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['src/**/*'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:unicorn/recommended',
        'next/core-web-vitals',
        'prettier',
      ],
      rules: {
        ...globalRules,
      },
    },
  ],
};

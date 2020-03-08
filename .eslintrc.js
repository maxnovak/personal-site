module.exports = {
  plugins: [
    'react',
  ],
  extends: `react-app`,
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  globals: {
    expect: false,
    jest: true
  },
  settings : {
    react: {
      version: "detect"
    }
  },
  rules: {
    "no-console": [2, { "allow": ["warn", "error"] }],
    "comma-dangle": [ "error", "always-multiline"],
    "import/extensions": 0,
    "no-debugger": 2,
    "no-underscore-dangle": 0,
    "no-unused-vars": [ 2, { "argsIgnorePattern": "^_" }],
    'react/no-did-mount-set-state': 0,
    'react/require-default-props': 0,
    'function-paren-newline': [2, "consistent"],
    "indent":
    [
      2,
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["TemplateLiteral"]
      }
    ],
    'no-undef': 2,
    'no-empty-function': 2,
    'semi': 2,
    'padding-line-between-statements': 2,
    'no-unused-expressions': 2,
    'no-multiple-empty-lines': 2,
    'arrow-parens': 2,
    'camelcase': ["error", { properties: "never" }],
    'curly': 2,
    'quotes': 2,
    'complexity': 2,
    'padded-blocks': 2,
    'default-case': 2,
    'prefer-destructuring': 2,
    'space-before-function-paren': 2,
    'lines-between-class-members': 2,
    'no-duplicate-imports': 2,
    'max-len' : 0,
    'lines-around-comment': 0,
    'no-extra-parens': 0,
    'array-bracket-spacing': 0,
  },
}
module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    project: "./tsconfig.json",
    sourceType: "module", // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        endOfLine: "auto",
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    // this assumes that something that exports one item now will always do so
    "import/prefer-default-export": "off",
    // airbnb considers any loop restricted syntax O_o
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "react/no-danger": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/button-has-type": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-await-in-loop": "off",
    // Until this is resolved:
    // https://github.com/typescript-eslint/typescript-eslint/issues/2077
    "@typescript-eslint/camelcase": "off",
    // "no-console": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "jsx-a11y/anchor-is-valid": 0,
    "no-restricted-imports": [
      "error",
      {
        paths: ["lodash"],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
};

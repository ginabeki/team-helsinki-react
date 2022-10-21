module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "airbnb",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    quotes: 0,
    semi: 0,
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: "always",
        ObjectPattern: {
          multiline: false,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 4,
        },
        ExportDeclaration: "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
      },
    ],
  },
};

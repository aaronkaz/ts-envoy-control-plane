module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
  ],
  "globals": {
    "$": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "plugins": [
    "import",
    "@typescript-eslint"
  ],
  "overrides": [
    {
      "files": ["*.test.ts", "*.test.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ],
  "rules": {
    "import/namespace": [2, { allowComputed: true }],
    "import/default": "off",

    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "local",
        "argsIgnorePattern": "^(props|error|reject|response|dispatch|getState)$"
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",

    "no-trailing-spaces": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "indent": "off",
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "default-case": "error",
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      },
    ],
    "no-empty-function": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-lone-blocks": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-multi-spaces": "error",
    "no-script-url": "error",
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "argsIgnorePattern": "^(props|error|reject|response|dispatch|getState)$"
      }
    ],
    "no-useless-concat": "error",
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": false
      }, {
        "enforceForRenamedProperties": false,
        "enforceForComputedProperties": false
      }
    ],
    "yoda": "error",
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "objectsInArrays": false
      }
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "newline-before-return": "error",
    "newline-per-chained-call": [
      "error",
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-unneeded-ternary": "error",
    "object-curly-newline": [
      "warn",
      {
        "ObjectExpression": {"multiline": true, "minProperties": 1},
        "ObjectPattern": {"consistent": true}
      }
    ],
    "object-property-newline": "error",
    "one-var": [
      "error",
      {
        var: "never",
        let: "never",
        const: "never",
      }
    ],
    "prefer-destructuring": [
      "warn",
      {
        "array": true,
        "object": true
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never"
      }
    ],
    "space-in-parens": [
      "error",
      "always",
      {
        "exceptions": [
          "{}"
        ]
      }
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "wrap-regex": "error",
    "arrow-body-style": [
      "error",
      "always"
    ],
    "arrow-spacing": "error",
    "no-duplicate-imports": "error"
  }
};

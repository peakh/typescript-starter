// @ts-check
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config(
	[globalIgnores(["dist/*"])],
	js.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	{
		plugins: {
			"@stylistic": stylistic,
		},
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["eslint.config.mjs"],
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			// See https://eslint.org/docs/latest/use/configure/rules or https://typescript-eslint.io/rules/.
			// Severity should be one of the following: 0 = off, 1 = warn, 2 = error.
			curly: 2,
			eqeqeq: 2,
			"object-shorthand": 1,
			"prefer-template": 1,
			"prefer-arrow-callback": 1,
			"arrow-spacing": 1,
			"arrow-body-style": 1,
			"space-before-blocks": 1,
			"no-unused-vars": 0,
			"no-useless-escape": 1,
			"no-useless-return": 1,
			"no-else-return": 2,
			"@typescript-eslint/consistent-type-imports": 2,
			"@typescript-eslint/consistent-type-exports": 2,
			"@typescript-eslint/array-type": 1,
			"@typescript-eslint/member-ordering": 1,
			"@typescript-eslint/prefer-optional-chain": 1,
			"@typescript-eslint/prefer-nullish-coalescing": 1,
			"@typescript-eslint/prefer-includes": 1,
			"@typescript-eslint/prefer-readonly": 2,
			"@typescript-eslint/require-array-sort-compare": 1,
			"@typescript-eslint/return-await": [2, "always"],
			"@typescript-eslint/no-misused-promises": 0,
			"@typescript-eslint/no-floating-promises": 1,
			"@typescript-eslint/no-unused-vars": 1,
			"@typescript-eslint/no-deprecated": 1,
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": 1,
			"@typescript-eslint/no-confusing-non-null-assertion": 2,
			"@typescript-eslint/no-non-null-assertion": 2,
			"@typescript-eslint/no-unnecessary-condition": 2,
			"@typescript-eslint/no-unnecessary-type-conversion": 2,
			// Prohibit the usage of unnecessary backticks.
			"@stylistic/quotes": [
				2,
				"double",
				{
					avoidEscape: true,
					allowTemplateLiterals: "never",
				},
			],
			"@stylistic/semi": 1,
		},
	},
	{
		files: ["eslint.config.mjs", "dist/*"],
		extends: [tseslint.configs.disableTypeChecked],
	}
);

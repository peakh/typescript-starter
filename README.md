## TypeScript Starter

An opinionated TypeScript starter for future projects.

### Features

- Full ESM support
- Equipped with [ESLint](https://eslint.org), [TypeScript ESLint](https://typescript-eslint.io), and [Stylistic](https://eslint.style) for improved code consistency and quality
- [Source map support](https://github.com/evanw/node-source-map-support) for direct TypeScript file paths in stack traces
- Import alias paths for concise import paths (e.g., `@/index.js`, `@/util/index.js`)

### Getting Started

Install dependencies:

```bash
npm i
```

### Integrated Scripts

- `build` (compiles TypeScript files into JavaScript to the `/dist` directory. This also provides usage of [tsc-alias](https://npmjs.com/package/tsc-alias), effectively integrating relative paths to alias paths as configured in [tsconfig.json](/tsconfig.json)):

```bash
npm run build
```

- `start` (builds and starts main process):

```bash
npm run start
```

- `format` (formats all files within `/src/**` with Prettier):

```bash
npm run format
```

- `lint` (checks all files within `/src/**` to ensure they meet the rules specified in [eslint.config.mjs](/eslint.config.mjs)):

```bash
npm run lint
```

- `watch` (initializes TypeScript compilation in watch mode to monitor changes in files):

```bash
npm run watch
```

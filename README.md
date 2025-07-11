## TypeScript Starter

An opinionated TypeScript starter for future projects.

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

- `lint` (checks all files within `/src/**` to ensure they meet the rules specified in [eslint.config.mjs](/eslint.config.mjs))

```bash
npm run lint
```

- `watch` (initializes TypeScript compilation in watch mode to monitor changes in files):

```bash
npm run watch
```

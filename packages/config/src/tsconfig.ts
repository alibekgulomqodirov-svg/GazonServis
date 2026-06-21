// Shared TypeScript configuration
const baseConfig = {
  compilerOptions: {
    target: 'ES2020' as const,
    module: 'commonjs' as const,
    lib: ['ES2020'],
    declaration: true,
    strict: true,
    noImplicitAny: true,
    strictNullChecks: true,
    noImplicitThis: true,
    alwaysStrict: true,
    noUnusedLocals: false,
    noUnusedParameters: false,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: false,
    inlineSourceMap: true,
    inlineSources: true,
    experimentalDecorators: true,
    strictPropertyInitialization: false,
    esModuleInterop: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    moduleResolution: 'node' as const,
    resolveJsonModule: true,
  },
};

export const nodeConfig = {
  ...baseConfig,
  compilerOptions: {
    ...baseConfig.compilerOptions,
    outDir: './dist',
    rootDir: './src',
  },
};

export const nextConfig = {
  ...baseConfig,
  compilerOptions: {
    ...baseConfig.compilerOptions,
    jsx: 'preserve' as const,
    increment: true,
    isolatedModules: true,
    plugins: [{ name: 'next' }],
  },
  include: ['src/**/*', '.next/types/**/*.ts'],
  exclude: ['node_modules'],
};

export default baseConfig;

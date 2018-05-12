export function tsconfigMake(): string {
  return `{
  "compilerOptions": {
    "outDir": "./lib/",
    "declaration": true,
    "declarationDir": "./@types",
    "sourceMap": true,
    "isolatedModules": false,
    "noImplicitAny": true,
    "module": "none",
    "target": "es2015",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "jsx": "react",
    "jsxFactory": "React.createElement",
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noEmit": false,
    "strictNullChecks": true,
    "lib": [
      "es5",
      "es6",
      "es7",
      "esnext",
      "esnext.asynciterable",
      "es2015",
      "es2015.core",
      "es2015.promise",
      "es2015.collection",
      "es2015.symbol.wellknown",
      "es2016",
      "es2016.array.include",
      "es2017",
      "es2017.object",
      "es2017.sharedmemory",
      "dom",
      "dom.iterable",
      "webworker"
    ],
    "types": [
      "@types/window-or-global",
      "@types/node"
    ]
  },
  "compileOnSave": true,
  "exclude": [
    "lib",
    "**/*.test.ts",
    "node_modules",
    "node_modules/*",
    "assets/plugins/*",
    "node_modules/**/*",
    "node_modules/@types",
    "dist",
    "tsdist"
  ],
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "files": [
    "src/main.ts"
  ]
}
`;
}

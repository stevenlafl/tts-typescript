## Typescript Declarations for Tabletop Simulator

Intended for use with https://typescripttolua.github.io

### TODO

- Finish tests
- Create example projects

### Usage

1. `npm install tts-types`
2. Modify the tsconfig, add the declaration files to your `types` or `typeRoots`
3. Use `"luaTarget": "5.2"` to be compatible with the LUA version Tabletop Simulator uses.

I use this:

```
{
  "compilerOptions": {
    "rootDir": ".",
    "outDir": "build",

    "target": "ESNext",
    "lib": ["ESNext"],
    
    "moduleResolution": "nodenext",

    "declaration": false,
    "declarationMap": false,

    "strict": true,
    "types": ["tts-types"],
  },
  "tstl": {
    "luaTarget": "5.2",
    "noImplicitSelf": true,
    "tstlVerbose": true,
    "luaBundle": "bundle.lua",
    "luaBundleEntry": "src/index.ts",
  },
}
```

### Development

1. Clone
2. `npm install`
3. `npm run build` to build the project
4. `npm run test` to run tests

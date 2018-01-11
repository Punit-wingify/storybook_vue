# storybook

> A Vue.js project

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# How to trace storybook error
1) Run 'npm run storybook'
2) It will throw following errors in console:

ERROR in /path/to/repo/src/main.ts
[tsl] ERROR in /path/to/repo/src/main.ts(4,17)
      TS2307: Cannot find module './App.vue'.

ERROR in ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/HelloWorld.vue
Module build failed: Error: Could not find file: '/path/to/repo/src/components/HelloWorld.vue'.
    at getValidSourceFile (/path/to/repo/node_modules/typescript/lib/typescript.js:95642:23)
    at Object.getEmitOutput (/path/to/repo/node_modules/typescript/lib/typescript.js:96002:30)
    at getEmit (/path/to/repo/node_modules/ts-loader/dist/index.js:145:43)
    at successLoader (/path/to/repo/node_modules/ts-loader/dist/index.js:42:11)
    at Object.loader (/path/to/repo/node_modules/ts-loader/dist/index.js:29:12)
 @ ./src/components/HelloWorld.vue 8:0-107 9:0-120
 @ ./src/stories/index.js
 @ ./.storybook/config.js
 @ multi ./node_modules/@storybook/vue/dist/server/config/polyfills.js ./node_modules/@storybook/vue/dist/server/config/globals.js (webpack)-hot-middleware/client.js?reload=true ./.storybook/config.js
```

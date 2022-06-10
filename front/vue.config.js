const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // lintOnSave: false
});

// const path = require("path");

// module.exports = {
//   pluginOptions: {
//     "style-resources-loader": {
//       preProcessor: "scss",
//       patterns: [path.resolve(__dirname, "./src/assets/scss/_variables.scss")]
//     }
//   }
// }; 

// const path = require('path');

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "@/assets/scss/variables.scss";`
//       }
//     }
//   }
// };
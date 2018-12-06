module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
		        @import "~@/styles/abstracts/_variables.scss";
		        @import "~@/styles/abstracts/_functions.scss"; 
		        @import "~@/styles/abstracts/_mixins.scss";  
		        @import "~@/styles/base/_typography.scss";  
        `
      }
    }
  }
};

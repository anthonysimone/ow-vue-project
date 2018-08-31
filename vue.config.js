module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/ow-vue-project/'
    : '/',
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}
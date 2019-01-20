module.exports = {
  components: 'src/components/**/[A-Z]*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Coiny|Acme'
        }
      ]
    }
  }
};

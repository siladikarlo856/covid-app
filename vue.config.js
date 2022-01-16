module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/covid-app/' : '/',
  pages: {
    index: {
      // Entry point for the web application.
      entry: 'src/main.js',
      // Title - text in web browser tab.
      title: 'Covid App',
    },
  },
};

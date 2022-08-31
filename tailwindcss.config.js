module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'arima-madurai': ['Arima Madurai','cursive'],
      },
      backgroundImage: {
        'delaneymethod': 'linear-gradient(49deg,rgba(219,89,74,1) 0%,rgba(248,92,76,1) 33%,rgba(219,89,74,1) 100%);'
      }
    },
  },
  plugins: [],
}

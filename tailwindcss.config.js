module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/index.html'
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'arima-madurai': [
          'Arima Madurai',
          'cursive'
        ],
      },
      backgroundImage: {
        'rainbow': 'linear-gradient(' +
          '90deg,' +
          'rgba(255, 0, 0, 1) 0%,' +
          'rgba(255, 154, 0, 1) 10%,' +
          'rgba(208, 222, 33, 1) 20%,' +
          'rgba(79, 220, 74, 1) 30%,' +
          'rgba(63, 218, 216, 1) 40%,' +
          'rgba(47, 201, 226, 1) 50%,' +
          'rgba(28, 127, 238, 1) 60%,' +
          'rgba(95, 21, 242, 1) 70%,' +
          'rgba(186, 12, 248, 1) 80%,' +
          'rgba(251, 7, 217, 1) 90%,' +
          'rgba(255, 0, 0, 1) 100%' +
        ');',
        'delaneymethod': 'linear-gradient(' +
          '49deg,' +
          'rgba(219,89,74,1) 0%,' +
          'rgba(248,92,76,1) 33%,' +
          'rgba(219,89,74,1) 100%' +
        ');'
      }
    },
  },
  plugins: [],
}

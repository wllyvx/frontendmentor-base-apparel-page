module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        // primary
        'desaturated-red': '#ce9797',
        'soft-red': '#f96262',

        // neutral
        'dark-grayish-red': '#413a3a',

        //gradients
        'grad1-start': '#ffffff',
        'grad1-end': '#fff5f5',
        'grad2-start': '#f8bfbf',
        'grad2-end': '#ee8c8c',
      }
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      // Custom Light Gray
      // https://javisperez.github.io/tailwindcolorshades/#/?lgray=CFCFCF&tv=1
      "lgray": {
        100: '#FAFAFA',
        200: '#F3F3F3',
        300: '#ECECEC',
        400: '#DDDDDD',
        500: '#CFCFCF',
        600: '#BABABA',
        700: '#7C7C7C',
        800: '#5D5D5D',
        900: '#3E3E3E'
      },
      // Custom Dark Gray
      // https://javisperez.github.io/tailwindcolorshades/#/?dgray=515151&tv=1
      "dgray": {
        100: '#EEEEEE',
        200: '#D4D4D4',
        300: '#B9B9B9',
        400: '#858585',
        500: '#515151',
        600: '#494949',
        700: '#313131',
        800: '#242424',
        900: '#181818'
      },
      red: {
        100: '#FFF5F5',
        200: '#FED7D7',
        300: '#FEB2B2',
        400: '#FC8181',
        500: '#F56565',
        600: '#E53E3E',
        700: '#C53030',
        800: '#9B2C2C',
        900: '#742A2A',
      },
      // Custom Orange
      // https://javisperez.github.io/tailwindcolorshades/#/?orange=D45C1B&tv=1
      orange: {
        100: '#FBEFE8',
        200: '#F4D6C6',
        300: '#EEBEA4',
        400: '#E18D5F',
        500: '#D45C1B',
        600: '#BF5318',
        700: '#7F3710',
        800: '#5F290C',
        900: '#401C08'
      },
      // Custom Orange
      // https://javisperez.github.io/tailwindcolorshades/#/?yellow=FD9E39&tv=1
      yellow: {
        100: '#FFF5EB',
        200: '#FFE7CE',
        300: '#FED8B0',
        400: '#FEBB74',
        500: '#FD9E39',
        600: '#E48E33',
        700: '#985F22',
        800: '#72471A',
        900: '#4C2F11'
      },
      green: {
        100: '#F0FFF4',
        200: '#C6F6D5',
        300: '#9AE6B4',
        400: '#68D391',
        500: '#48BB78',
        600: '#38A169',
        700: '#2F855A',
        800: '#276749',
        900: '#22543D',
      },
      // Custom Teal
      // https://javisperez.github.io/tailwindcolorshades/#/?teal=1BD4B9&tv=1
      teal: {
        100: '#E8FBF8',
        200: '#C6F4EE',
        300: '#A4EEE3',
        400: '#5FE1CE',
        500: '#1BD4B9',
        600: '#18BFA7',
        700: '#107F6F',
        800: '#0C5F53',
        900: '#084038'
      },
      indigo: {
        100: '#EBF4FF',
        200: '#C3DAFE',
        300: '#A3BFFA',
        400: '#7F9CF5',
        500: '#667EEA',
        600: '#5A67D8',
        700: '#4C51BF',
        800: '#434190',
        900: '#3C366B',
      },
      purple: {
        100: '#FAF5FF',
        200: '#E9D8FD',
        300: '#D6BCFA',
        400: '#B794F4',
        500: '#9F7AEA',
        600: '#805AD5',
        700: '#6B46C1',
        800: '#553C9A',
        900: '#44337A',
      },
    },
    extend: {
      spacing: {
        '80': '20rem',
      },
      container: {
        center: true
      },
      fontFamily: {
        sans: [
          'Raleway'
        ],
        mono: [
          'Proxima Nova'
        ],
      },
      maxWidth: {
        '2xs': '4rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  plugins: []
}

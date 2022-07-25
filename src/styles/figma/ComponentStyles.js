const Colors = require('./Colors')

const ComponentStyles = {
  button: {
    padding: '1rem 2rem',
    borderRadius: '0.375rem',
    fontWeight: '700',
    fontFamily: 'Montserrat',
    whiteSpace: 'nowrap',
    backgroundColor: {
      primary: Colors.primary,
      primaryHover: Colors.primaryHover,
      secondary: Colors.secondary,
      secondaryHover: Colors.secondaryHover,
      tertiary: Colors.white,
      tertiaryHover: Colors.darkNavy,
    },
    textColor: {
      primary: Colors.secondary,
      secondary: Colors.white,
      tertiary: Colors.secondary,
    },
  },
}

module.exports = ComponentStyles

const BaseFontSize = require('./BaseFontSize')

const FontSizes = {
  eyebrow: {
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: 95,
    lineHeight: 97,
    letterSpacing: '-0.006em',
  },
  h2: {
    fontSize: 64,
    lineHeight: 66,
    letterSpacing: '-0.006em',
  },
  h3: {
    fontSize: 38,
    lineHeight: 40,
    letterSpacing: '-0.006em',
  },
  h4: {
    fontSize: 32,
    lineHeight: 34,
    letterSpacing: '-0.006em',
  },
  h5: {
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: '-0.006em',
  },
  h6: {
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: '-0.006em',
  },
  baseHeadline: {
    fontSize: BaseFontSize,
    lineHeight: 20,
    letterSpacing: '-0.006em',
  },
  smallHeadline: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: '-0.006em',
  },
  tableHeadline: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: '0.05em',
  },
  formLabel: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: '-0.006em',
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: '-0.003em',
  },
  bodyBase: {
    fontSize: BaseFontSize,
    lineHeight: 24,
    letterSpacing: '-0.003em',
  },
  bodyXL: {
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: '0em',
  },
  buttonTextSmall: {
    fontSize: 12,
    lineHeight: 13,
    letterSpacing: '0em',
  },
  buttonTextBase: {
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: '0em',
  },
  buttonTextLarge: {
    fontSize: 16,
    lineHeight: 17,
    letterSpacing: '0em',
  },
}

module.exports = FontSizes

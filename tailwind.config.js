const BaseFontSize = require('./src/styles/figma/BaseFontSize')
const Colors = require('./src/styles/figma/Colors')
const ComponentStyles = require('./src/styles/figma/ComponentStyles')
const FontSizes = require('./src/styles/figma/FontSizes')

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const pxToRem = value => {
  return value / BaseFontSize + 'rem'
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      grey100: Colors.grey100,
      grey200: Colors.grey200,
      grey300: Colors.grey300,
      grey400: Colors.grey400,
      grey500: Colors.grey500,
      grey900: Colors.grey900,
      white: Colors.white,
      primary: Colors.primary,
      primaryLight: Colors.primaryLight,
      primaryMedium: Colors.primaryMedium,
      secondary: Colors.secondary,
      lightGrey: Colors.lightGrey,
      mediumGrey: Colors.mediumGrey,
      darkGrey: Colors.darkGrey,
      darkNavy: Colors.darkNavy,
      platinum: Colors.platinum,
      tertiary: Colors.tertiary,
      cream: Colors.cream,
      sectionBackground: Colors.sectionBackground,
      formBackgroundOnDark: Colors.formBackgroundOnDark,
      tableHeaderBackground: Colors.tableHeaderBackground,
      tableDarkNavy: Colors.tableDarkNavy,
      mainHeadline: Colors.mainHeadline,
      paragraphText: Colors.paragraphText,
      placeholder: Colors.placeholder,
      errorOnLight: Colors.errorOnLight,
      errorOnDark: Colors.errorOnDark,
      successOnLight: Colors.successOnLight,
      successOnDark: Colors.successOnDark,
      buttonMain: Colors.buttonMain,
      buttonSecondary: Colors.buttonSecondary,
      buttonHover: Colors.buttonHover,
      buttonFocus: Colors.buttonFocus,
      buttonDisabled: Colors.buttonDisabled,
      dividerOnDark: Colors.dividerOnDark,
      dividerOnLight: Colors.dividerOnLight,
      textLink: Colors.textLink,
      textLinkHover: Colors.darkNavy,
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['Bitter', ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      h1: [
        `${pxToRem(FontSizes.h1.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.h1.lineHeight)}`,
          letterSpacing: FontSizes.h1.letterSpacing,
        },
      ],
      h2: [
        `${pxToRem(FontSizes.h2.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.h2.lineHeight)}`,
          letterSpacing: `${FontSizes.h2.letterSpacing}`,
        },
      ],
      h3: [
        `${pxToRem(FontSizes.h3.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.h3.lineHeight)}`,
          letterSpacing: `${FontSizes.h3.letterSpacing}`,
        },
      ],
      h4: [
        `${pxToRem(FontSizes.h4.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.h4.lineHeight)}`,
          letterSpacing: `${FontSizes.h4.letterSpacing}`,
        },
      ],
      h5: [
        `${pxToRem(FontSizes.h5.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.h5.lineHeight)}`,
          letterSpacing: `${FontSizes.h5.letterSpacing}`,
        },
      ],
      h6: [
        `${pxToRem(FontSizes.h6.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.h6.lineHeight)}`,
          letterSpacing: `${FontSizes.h6.letterSpacing}`,
        },
      ],
      baseHeadline: [
        `${pxToRem(FontSizes.baseHeadline.fontSize)}`,
        {
          lineHeight: `${pxToRem(FontSizes.baseHeadline.lineHeight)}`,
          letterSpacing: `${FontSizes.baseHeadline.letterSpacing}`,
        },
      ],
      smallHeadline: [
        `${pxToRem(FontSizes.smallHeadline.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.smallHeadline.lineHeight)}`,
          letterSpacing: `${FontSizes.smallHeadline.letterSpacing}`,
        },
      ],
      tableHeadline: [
        `${pxToRem(FontSizes.tableHeadline.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.tableHeadline.lineHeight)}`,
          letterSpacing: `${FontSizes.tableHeadline.letterSpacing}`,
        },
      ],
      formLabel: [
        `${pxToRem(FontSizes.formLabel.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.formLabel.lineHeight)}`,
          letterSpacing: `${FontSizes.formLabel.letterSpacing}`,
        },
      ],
      bodySmall: [
        `${pxToRem(FontSizes.bodySmall.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.bodySmall.lineHeight)}`,
          letterSpacing: `${FontSizes.bodySmall.letterSpacing}`,
        },
      ],
      bodyBase: [
        `${pxToRem(FontSizes.bodyBase.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.bodyBase.lineHeight)}`,
          letterSpacing: `${FontSizes.bodyBase.letterSpacing}`,
        },
      ],
      bodyXL: [
        `${pxToRem(FontSizes.bodyXL.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.bodyXL.lineHeight)}`,
          letterSpacing: `${FontSizes.bodyXL.letterSpacing}`,
        },
      ],
      buttonSmall: [
        `${pxToRem(FontSizes.buttonTextSmall.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.buttonTextSmall.lineHeight)}`,
          letterSpacing: `${FontSizes.buttonTextSmall.letterSpacing}`,
        },
      ],
      buttonBase: [
        `${pxToRem(FontSizes.buttonTextBase.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.buttonTextBase.lineHeight)}`,
          letterSpacing: `${FontSizes.buttonTextBase.letterSpacing}`,
        },
      ],
      buttonLarge: [
        `${pxToRem(FontSizes.buttonTextLarge.fontSize)}`, // font-size
        {
          lineHeight: `${pxToRem(FontSizes.buttonTextLarge.lineHeight)}`,
          letterSpacing: `${FontSizes.buttonTextLarge.letterSpacing}`,
        },
      ],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: ComponentStyles.button.padding,
          borderRadius: ComponentStyles.button.borderRadius,
          fontWeight: ComponentStyles.button.fontWeight,
          fontFamily: ComponentStyles.button.fontFamily,
          whiteSpace: ComponentStyles.button.whiteSpace,
        },
        '.btn-primary': {
          backgroundColor: ComponentStyles.button.backgroundColor.primary,
          color: ComponentStyles.button.textColor.primary,
          '&:hover': {
            backgroundColor: ComponentStyles.button.backgroundColor.primaryHover,
          },
        },
        '.btn-secondary': {
          backgroundColor: ComponentStyles.button.backgroundColor.secondary,
          color: ComponentStyles.button.textColor.secondary,
          '&:hover': {
            backgroundColor: ComponentStyles.button.backgroundColor.secondaryHover,
          },
        },
        '.btn-tertiary': {
          backgroundColor: ComponentStyles.button.backgroundColor.tertiary,
          color: ComponentStyles.button.textColor.tertiary,
          '&:hover': {
            backgroundColor: ComponentStyles.button.backgroundColor.tertiaryHover,
            color: ComponentStyles.button.textColor.secondary,
          },
        },
      }

      const eyebrow = {
        '.eyebrow': {
          fontSize: `${pxToRem(FontSizes.eyebrow.fontSize)}`,
          letterSpacing: `${FontSizes.eyebrow.letterSpacing}`,
          lineHeight: `${pxToRem(FontSizes.eyebrow.lineHeight)}`,
          textTransform: FontSizes.eyebrow.textTransform,
        },
      }

      addComponents(buttons)
      addComponents(eyebrow)
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `Fusionary Gatsby Tailwind Typescript Template`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    /**
     * Manifest config
     * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fusionary Template`,
        short_name: `Gatsby TW TS`,
        description: `Template for use with Fusionary's figma standard for Tailwind.`,
        lang: `en`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
      },
    },

    /**
     * Google Analytics config
     * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
     */
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'GA-TODO',
      },
    },

    /**
     * Image config
     * @link https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image#customizing-the-defaults
     */
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },

    /**
     * .SVG config
     * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
     */
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/.*\.svg/,
        },
      },
    },

    /**
     * Root Import config
     * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-root-import/
     */
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~/src': path.resolve('./src'),
        '~/components': path.resolve('./src/components'),
        '~/context': path.resolve('./src/context'),
        '~/flexibleComponents': path.resolve('./src/flexibleComponents'),
        '~/hooks': path.resolve('./src/hooks'),
        '~/images': path.resolve('./src/images'),
        '~/layout': path.resolve('./src/layout'),
        '~/mappings': path.resolve('./src/mappings'),
        '~/page-components': path.resolve('./src/page-components'),
        '~/pages': path.resolve('./src/pages'),
        '~/root': path.resolve('./src/root'),
        '~/services': path.resolve('./src/services'),
        '~/staticData': path.resolve('./src/staticData'),
        '~/styledElements': path.resolve('./src/styledElements'),
        '~/styles': path.resolve('./src/styles'),
        '~/templates': path.resolve('./src/templates'),
        '~/types': path.resolve('./src/types'),
        '~/utils': path.resolve('./src/utils'),
        '~/svg': path.resolve('./src/svg'),
      },
    },

    'gatsby-plugin-loadable-components-ssr',
  ],
}

export default config

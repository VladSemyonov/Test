const {
  LOCALES,
  DEF_LOCALE,
  API_SITE_ID,
  API_ENDPOINT,
} = require("./app-config");

// https://jakubjafra.github.io/gatsby-deployment-to-cloudfront-using-serverless/
const siteAddress = new URL("https://yunotex.com");

module.exports = {
  siteMetadata: {
    title: "yunotex.com",
    description: "yunotex.com",
    siteUrl: "https://yunotex.com",
    author: "yunotex.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "CMSAPI",
        fieldName: "cmsApi",
        url: API_ENDPOINT,
        headers: {
          Authorization: JSON.stringify({
            siteID: API_SITE_ID,
          }),
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        usePreload: true,
        usePreconnect: true,
        fonts: {
          google2: [
            {
              family: "Roboto",
              axes: "wght@300;400;500;700",
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: DEF_LOCALE,
        configPath: require.resolve(`./i18n/config.json`),
        locales: LOCALES.join(" "),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/react-i18next`,
        i18nextOptions: {
          ns: [
            "site",
            "company",
            "footer",
            "about",
            "contact",
            "404",
            "navbar",
            "catalogCategories",
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/clothes`,
        name: "clothes",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/overalls/jackets`,
        name: "jackets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/overalls/military-clothes`,
        name: "military-clothes",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/overalls/trousers`,
        name: "trousers",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/home-textiles/blankets`,
        name: "blankets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/home-textiles/linens`,
        name: "linens",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/home-textiles/mattresses`,
        name: "mattresses",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/home-textiles/pillows`,
        name: "pillows",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/gallery/production/jersey`,
        name: "jersey",
      },
    },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //     bucketName: "yunotex.com",
    //     protocol: siteAddress.protocol.slice(0, -1),
    //     hostname: siteAddress.hostname,
    //     region: "eu-central-1",
    //   },
    // },
  ],
};

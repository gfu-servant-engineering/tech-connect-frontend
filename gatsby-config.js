require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
    description: 'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: `${process.env.GATSBY_STRAPI_HOST}`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'project',
          'blogpage',
          'aboutpage'
        ],
        queryLimit: 1000,
        loginData: {
          identifier: `${process.env.GATSBY_STRAPI_USER}`,
          password: `${process.env.GATSBY_STRAPI_PW}`,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: [
          "URL",
          "CONTEXT", 
          "DEPLOY_PRIME_URL",
        ]
      },
    },
    {
      resolve:'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: false,            // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{ name: 'en' }],
        // Fields to index
        fields: [
          { name: 'id', store: true},
          { name: 'project_name', store: true, attributes: { boost: 20 }},
          { name: 'project_description', store: true, attributes: { boost: 5 }},
          { name: 'project_image', store: true},
          { name: 'sponsor_name', store: true, attributes: { boost: 15 }},
        ],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          StrapiProject: {
            id: node => node.id,
            project_name: node => node.project_name,
            project_description: node => node.project_description,
            project_image: node => node.project_image,
            sponsor_name: node => node.sponsor_name,
          },
        },
        filename: 'search_index.json',
      },
    },
  ],
}

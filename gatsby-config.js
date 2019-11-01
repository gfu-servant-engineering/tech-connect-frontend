const { isNil } = require('lodash')

const mapPagesUrls = {
  index: '/',
}
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
        //apiURL: 'http://localhost:1337',
        apiURL: 'http://techconnect-api.ddns.net:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'project',
        ],
        queryLimit: 1000,
        loginData: {
          identifier: "",
          password: "",
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
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    // Doug is trying to add search via lunr
    {
      resolve: 'gatsby-plugin-lunr',
      options: {

        languages: [
          { 
            // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
            name: 'en',
          }
        ],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'description', store: true },
          { name: 'content', store: true },
          { name: 'url', store: true },
        ],
        filterNodes: (node) => !isNil(node.frontmatter),
        // How to resolve each field's value for a supported node type
        resolvers: {
        // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            description: (node) => node.frontmatter.description,
            content: (node) => node.rawMarkdownBody,
            url: (node) => mapPagesUrls[node.frontmatter.templateKey],
        },
      },
      //custom index file name, default is search_index.json
      filename: 'search_index.json',
      //custom options on fetch api call for search_ındex.json
      fetchOptions: {
        credentials: 'same-origin',
      },
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
  ],
}

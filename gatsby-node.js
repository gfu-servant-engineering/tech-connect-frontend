const _ = require('lodash')
const path = require('path')
const eJson = require("edit-json-file")
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const fs = require('fs')

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiProject {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiProject.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/specific-project.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const saveProjectImages = makeRequest(graphql, `
    query {
      allStrapiProject {
        edges {
          node {
            id
            project_image {
              childImageSharp {
                fluid(maxWidth:300, maxHeight:200, quality:90, toFormat: JPG) {
                  src
                  aspectRatio
                  presentationHeight
                  presentationWidth
                  srcSet
                  sizes
                  srcSetWebp
                  srcWebp
                  tracedSVG
                  originalName
                  originalImg
                  base64
                }
              }
            }
          }
        }
      }
    }
  `).then( (data) => {
    var imageFile = JSON.stringify(data);
    fs.writeFile("public/projectImageSrc.json", imageFile, 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    });
  });

  const saveBlogImages = makeRequest(graphql, `
    query {
      allStrapiBlogpage {
        edges {
          node {
            id
            image {
              childImageSharp {
                fluid(maxWidth:300, maxHeight:200, quality:90, toFormat: JPG) {
                  src
                  aspectRatio
                  presentationHeight
                  presentationWidth
                  srcSet
                  sizes
                  srcSetWebp
                  srcWebp
                  tracedSVG
                  originalName
                  originalImg
                  base64
                }
              }
            }
          }
        }
      }
    }
  `).then( (data) => {
    var imageFile = JSON.stringify(data);
    fs.writeFile("public/blogImageSrc.json", imageFile, 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    });
  });

  const getBlogpages = makeRequest(graphql, `
    {
      allStrapiBlogpage {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiBlogpage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getAboutpage = makeRequest(graphql, `
    {
      allStrapiAboutpage {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiAboutpage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/about-page.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  // Query for articles nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getAboutpage,
    getBlogpages,
  ])
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Frontmatter: {
      author: {
        resolve(source, args, context, info) {
          return context.nodeModel.getNodeById({
            id: source.author,
            type: "AuthorJson",
          })
        },
      },
    },
  }
  createResolvers(resolvers)
}

exports.onPostBootstrap = () => {
    var index = eJson('public/search_index.json');
    var projectImages = eJson('public/projectImageSrc.json').data.data.allStrapiProject.edges;
    var blogImages = eJson('public/blogImageSrc.json').data.data.allStrapiBlogpage.edges;

    // en -> store
    for (var i = 0; i < projectImages.length; i++) {
      var node = projectImages[i].node;
      var id = node.id;
      var image = node.project_image;
      var indexInstance = index.data.en.store[id];
      indexInstance.project_image = image;
      
      // renaming because of projects bad naming scheme
      indexInstance.id = indexInstance.project_id;
      indexInstance.short_description = indexInstance.project_short_description;
      indexInstance.sponsor_name = indexInstance.project_sponsor_name;
    }

    // en -> store
    for (var i = 0; i < blogImages.length; i++) {
      var node = blogImages[i].node;
      var id = node.id;
      var image = node.image;
      var indexInstance = index.data.en.store[id];
      indexInstance.image = image;

      // renaming because of blogpages bad naming scheme
      indexInstance.title = indexInstance.blog_name;
      indexInstance.description = indexInstance.blog_description;
      indexInstance.id = indexInstance.blog_id;
      indexInstance.short_description = indexInstance.blog_short_description;
    }

    index.save();
}

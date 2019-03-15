# Tech Connect Frontend

**Note:** This site uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

This repo contains the frontend components of Tech Connect and consists of a Gatsby project linked to a Netlify repository.
It links to a tweaked [Strapi backend](https://github.com/gfu-servant-engineering/tech-connect-backend) in `gatsby-config.js`. 


## Prerequisites

- Node (recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- A running Strapi server (currently at `http://techconnect-api.ddns.net:1337`)

## Getting Started
```
$ git clone https://github.com/gfu-servant-engineering/tech-connect-frontend
$ cd tech-connect-frontend
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

### Setting up Strapi

Refer to the backend [readme](https://github.com/gfu-servant-engineering/tech-connect-backend/blob/master/README.md) for Strapi installation instructions.

Edit the `apiURL` attribute in `gatsby-config.js` to change the address of the Strapi server.

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```
There may be a problem connecting to the Strapi backend, if it is not running on the server pointed to in `gatsby-config.js`, edit the `apiURL` attribute in that file to use a different server.


## Purgecss
This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

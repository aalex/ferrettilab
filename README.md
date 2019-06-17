# Web site for Ferretti Labs
This is the source of the Web site for the Ferretti Labs.

This Web site is made with Gatsby.


## Files structure
Here is the file structure for this project:

- gatsby-config.js: The Gatsby configuration file.
- package.json: The NPM configuration file. List software dependencies here.
- src: The source files.
  - components: Custom React components.
  - data: Data files. (YAML, Markdown, etc.)
  - layouts: Template files.
  - pages: The contents of the pages of the Web site.
  - style: CSS style sheets.

In short, if you need to edit the contents of this site, edit the files in the `src/pages` directory.

## Setup
Here is a quick reminder of our to start the development Web server:

```
npm install -g gatsby-cli
npm install
npm run develop
```

## Deployment for production

```
npm install -g gatsby-cli
npm install
npm run build
npm run serve
```

Running `npm run build` should create and populate a "public" directory.


## Base theme
This project has been started from the theme gatsby-starter-default-i18n.
The default Gatsby i18n starter for multi language websites.

See also:
- [DEMO](https://gatsby-starter-default-i18n.netlify.com)
- [i18n Plugin](https://github.com/angeloocana/gatsby-plugin-i18n)


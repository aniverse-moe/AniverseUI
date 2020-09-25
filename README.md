# Aniverse UI
Aniverse official site
> Aniverse is an open source database for hebrew anime translations.

## Main Technologies
* Nuxt.js
  > Nuxt is a progressive framework based on Vue.js to create modern web applications.<br/>
  Check out [Nuxt.js docs](https://nuxtjs.org).
* Tailwind CSS
  > Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.<br/>
  Check out [Tailwind CSS docs](https://tailwindcss.com/docs/utility-first).

## Build Setup

### Installation
Install dependencies:
```bash
$ npm ci
```

Or install and update dependencies (update package-lock):
```bash
$ npm install
```

### Launch development server
Serve with hot reload at localhost:3000
```bash
$ npm run dev
```

### Build and launch production
Build and launch production static server (current):
```bash
$ npm run generate
$ npm run start
```

Or build and launch production SSR server:
```bash
$ npm run build
$ npm run start
```

## Branches
* `master`: The main branch. All development code is merged into `master` in sometime.
* `prod`: Everything pushed to `prod` updates the real [production site](https://aniverse-moe.github.io). 
* `preprod`: Everything pushed to `preprod` updates the real [pre-production site](https://aniverse-moe.github.io/AniverseUI-PreProd-Host). 
> **Tip:** To be sure the latest commit to `prod` or `preprod` has updated the site, open the site in the browser and open the DevTools. You will see a logged message: 
`LAST_COMMIT_SHA: <sha>`.</br>
Just compare the `<sha>` to the latest commit in the `prod`/`preprod` branch.


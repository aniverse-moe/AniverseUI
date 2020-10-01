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

### Test and lint
Run tests:
```bash
$ npm run test
```
Find lint problems:
```bash
$ npm run lint
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

## Development Tools
### Recommended VSCode extensions
> VS Code prompts a user to install the recommended extensions when the workspace is opened for the first time. The user can also review the list with the `Extensions: Show Recommended Extensions` command.

*Required:*
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

*Recommended:*
* [vue-helper](https://marketplace.visualstudio.com/items?itemName=shenjiaolong.vue-helper)
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css#review-details)
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
* [Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)
* [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
* [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
* [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

## Contributing
### Branches
* `master`: The main branch. All development code is merged into `master` in sometime.
* `prod`: Everything pushed to `prod` updates the real [production site](https://aniverse-moe.github.io). 
* `preprod`: Everything pushed to `preprod` updates the real [pre-production site](https://aniverse-moe.github.io/AniverseUI-PreProd-Host). 
> **Tip:** To be sure the latest commit to `prod` or `preprod` has updated the site, open the site in the browser and open the DevTools. You will see a logged message: 
`LAST_COMMIT_SHA: <sha>`.</br>
Just compare the `<sha>` to the latest commit in the `prod`/`preprod` branch.

## How To
### How to add custom font?
1. Add font file in `~/assets/fonts` folder.
2. Add font-face in `~/assets/css/global-fonts.css`:

    ```css
    @font-face {
      font-family: my-font-name;
      src: url("~assets/fonts/my-font-file.ttf");
    }
    ```

3. Use it:
    ```css
    .myClass {
      font-family: my-font-name;
    }
    ```

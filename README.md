# Aniverse UI

![Master CI](https://github.com/aniverse-moe/AniverseUI/workflows/Master%20CI/badge.svg)
![Prod Deploy](https://github.com/aniverse-moe/AniverseUI/workflows/Prod%20Deploy/badge.svg)
![PreProd Deploy](https://github.com/aniverse-moe/AniverseUI/workflows/PreProd%20Deploy/badge.svg)

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
*See [Browser Debugging](#Browser-Debugging)*

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
### VSCode extensions
> VS Code prompts a user to install the recommended extensions when the workspace is opened for the first time. The user can also review the list with the `Extensions: Show Recommended Extensions` command.

*Required:*
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

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

### Browser extensions
* [Vue.js devtools for chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Debugging
### Browser Debugging:
For simple debugging just run `npm run dev` to serve the site with hot reloading
at localhost:3000, and open the site in any browser.<br/>
* Best for live HTML editing. Edit the code and watch the browser window change.
* You can use the browser devtools, like CSS Editor, Breakpoints and Network Analysis.

> *It's recommended to use [Vue.js devtools for chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) when in chrome.*

### VSCode Debugging:
To directly debug from VSCode with all its capabilities:<br/>
In VSCode, select `Launch Nuxt Server/Client` in the debugger drop-down menu, and start debugging
by clicking on the green arrow or pressing `F5`.<br/>

If your server is already running (by `npm run dev` somewhere), you can start faster only the
client debugger by selecting `Launch client: chrome` in the drop-down menu.

* VSCode is probably better for JavaScript debugging.
* VSCode is a great way to debug the build process or the Server-Side Rendering.
* Also has hot reloading.

> *VSCode Debugging requires the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.*

## Contributing
TODO...
### Branches
* `master`: The main branch. All development code is merged into `master` in sometime.
* `prod`: Everything pushed to `prod` updates the real [production site](https://aniverse-moe.github.io).
* `preprod`: Everything pushed to `preprod` updates the real [pre-production site](https://aniverse-moe.github.io/AniverseUI-PreProd-Host).
> **Tip:** To be sure the latest commit to `prod` or `preprod` has updated the site, open
the site in the browser and open the DevTools Console. You will see a logged message:
`LAST_COMMIT_SHA: <sha>`.</br>
Just compare the `<sha>` to the latest commit in the `prod`/`preprod` branch.

## FAQ
* [**How to add custom font?**](docs/FAQ/custom-font.md)

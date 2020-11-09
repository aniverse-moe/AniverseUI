# How to add icons?

## Font Awesome
Use [Font Awesome](https://fontawesome.com/icons) icons with the [@nuxtjs/fontawesome](https://github.com/nuxt-community/fontawesome-module) module (Uses [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) under the hood).

Example:
```html
<font-awesome-icon :icon="['fas', 'wifi']" />
```

Don't forget to add the new icon to `nuxt.config.js`:
```diff
 fontawesome: {
   icons: {
     solid: [
+      'faWifi'
     ],
   }
 }
```

See [Font Awesome Docs](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use).

> **Note:** You may need to restart Nuxt to see new icons.

> **Warning:** Use only free icons.

## Custom SVG Icon

Create a component for your SVG icon in `~/components/icons`. Use `.svg-icon-inline` class.

`~/components/icons/icon-mylogo.vue`:
```html
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    class="svg-icon-inline"
  >
    <path d="M..." />
  </svg>
</template>
```

Use it:
```html
<icon-mylogo />
```

Style with Tailwind:
```html
<icon-mylogo class="h-4 text-white fill-current stroke-current stroke-1" />
```

See [Tailwind: Working with SVG Icons](https://tailwindcss.com/course/working-with-svg-icons).

> **Tip:** Make sure your SVG file has only `fill="currentColor"` and/or `stroke="currentColor"` attributes. never specific color.

### Use font size
It's nice when the icon size increase and decrease according to the font size.
To do that, use **em** units to set the initial icon size:

```html
<icon-mylogo style="height: 0.9em; width: 1.25em;" />
```

Or set the size in the component:

`~/components/icons/icon-mylogo.vue`:
```diff
 <template>
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     stroke="currentColor"
     class="svg-icon-inline"
+    style="height: 1.2em; width: 1.25em;"
   >
     <path d="M..." />
   </svg>
 </template>
```

## Get Icons
You can find SVG icons on the internet or create one by yourself.

**Resources:**
* [Tailwind: Resources](https://tailwindcss.com/resources#icons)
* [heroicons](https://heroicons.com) (see [vue-hero-icons](https://github.com/matschik/vue-hero-icons))
* [Unicons](https://iconscout.com/unicons/explore/line) (see [vue-unicons](https://github.com/antonreshetov/vue-unicons))
* [Eva Icons](https://akveo.github.io/eva-icons) (see [vue-eva-icons](https://github.com/antonreshetov/vue-eva-icons))
* [Feather](https://feathericons.com) (see [vue-feather-icons](https://github.com/egoist/vue-feather-icons))
* [Material Design](https://material.io/resources/icons) (see [vue-ico](https://github.com/paulcollett/vue-ico))
* [Material Design Icons](https://materialdesignicons.com) (see [vue-material-design-icons](https://github.com/robcresswell/vue-material-design-icons) and [mdi-vue](https://github.com/therufa/mdi-vue))
* [Bootstrap Icons](https://icons.getbootstrap.com)
* [Boxicons](https://boxicons.com)
* [Tabler Icons](https://tablericons.com)
* [Ionicons](https://ionicons.com) (see [vue-ionicons](https://github.com/mazipan/vue-ionicons))
* [uxwing](https://uxwing.com)
* [Octicons](https://primer.style/octicons)
* [Zondicon](http://www.zondicons.com/icons.html) (see [vue-zondicons](https://github.com/TerryMooreII/vue-zondicons))
* [LineIcons](https://lineicons.com/icons)
* [Simple Icons](https://simpleicons.org) (brands icons)

**Search all in one place:**
* [styled-icons](https://styled-icons.js.org)
* [IcoMoon](https://icomoon.io/app)

# How to add custom font?
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

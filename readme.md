<!-- <h1 align="center">ссылка на <a href="https://github.com/jakiichu/new-ui" target="_blank">github</a>  -->
добавить в tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        ...
        "./node_modules/ipst_cp_platform/dist/**/*.js",
    ],
    ...
}

```
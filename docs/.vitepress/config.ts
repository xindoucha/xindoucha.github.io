import { defineConfig } from "vitepress";

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: "en-US",
  title: "xindoucha",
  description: "a person with nothing special",
  head: [["link", { rel: "shortcut icon", href: "/favicon.ico" }]],
  themeConfig: {
    // siteTitle: 'My Custom Title',
    // logo: 'https://avatars.githubusercontent.com/u/49982781',
    nav: [
      { text: "About", link: "/about" },
      // { text: 'Github', link: 'https://github.com/xindoucha' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/xindoucha" },
      { icon: "twitter", link: "https://twitter.com/chenqi_2022" },
    ],
    // sidebar: {
    //   '/about/': [
    //     {
    //       text: 'about',
    //       items: [
    //         // This shows `/guide/index.md` page.
    //         { text: 'Index', link: '/guide/' }, // /guide/index.md
    //         { text: 'One', link: '/guide/one' }, // /guide/one.md
    //         { text: 'Two', link: '/guide/two' } // /guide/two.md
    //       ]
    //     }
    //   ],
    // },
    footer: {
      message: "Made with ❤ by xindoucha",
      copyright: "Copyright © 2022-present xindoucha",
    },
  },
});

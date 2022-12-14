import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'xindoucha',
  description: 'a person with nothing special',

  themeConfig: {
    // siteTitle: 'My Custom Title',
    // logo: 'https://avatars.githubusercontent.com/u/49982781',
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Github', link: 'https://github.com/xindoucha' },

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

    // sidebar: [
    //   {
    //     text: 'Section Title A',
    //     items: [
    //       { text: 'Item A', link: '/item-a' },
    //       { text: 'Item B', link: '/item-b' },
    //     ],
    //   },
    //   {
    //     text: 'Section Title B',
    //     items: [
    //       { text: 'Item C', link: '/item-c' },
    //       { text: 'Item D', link: '/item-d' },
    //     ],
    //   },
    // ],
    footer: {
      message: 'Made with ❤ by xindoucha',
      copyright: 'Copyright © 2022-present xindoucha',
    },
  },
});

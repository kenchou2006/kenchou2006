import { defineConfig } from 'vitepress'

export default defineConfig({
  root: './',
  base: '/kenchou2006/',
  title: "Ken Chou",
  titleTemplate:false,
  siteTitle: "kenchou2006's Pages",
  description: "kenchou2006's Pages",
  appearance: true,
  lang: 'zh-Hant',
  cleanUrls: 'with-subfolders',
  // ignoreDeadLinks: true,
  themeConfig: {
    googleAnalyticsId: 'G-M6RLWS44B3',
    maxWidth: 4000,
    logo: 'https://avatars.githubusercontent.com/u/65105273?size=32',
    nav: [
      { text: 'Links' , link:'/Pages/Links'},
      { text: 'Gravatar', link: 'https://gravatar.com/kenchou2006' },
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/kenchou2006' },
      { icon: 'github', link: 'https://github.com/kenchou2006' },
    ],
    editLink: {
      pattern: "https://github.com/kenchou2006/kenchou2006",
      text: "Edit on GitHub",
    },
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2025-present Chou Kung Huan",
    },
  },
  rewrites: {
    'README.md': 'index.md',
  },
  head: [
    ['link', { rel: 'icon', href: 'https://github.githubassets.com/favicons/favicon.svg', media: '(prefers-color-scheme: light)'  }],
    ['link', { rel: 'icon', href: 'https://github.githubassets.com/favicons/favicon-dark.svg', media: '(prefers-color-scheme: dark)' }],
  ]
})
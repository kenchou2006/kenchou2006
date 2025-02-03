import { defineConfig } from 'vitepress'

export default defineConfig({
  root: './',
  base: '/kenchou2006/',
  title: "Ken Chou",
  description: "kenchou2006's Pages",
  themeConfig: {
    maxWidth: 4000,
    nav: [
      { text: 'Links' , link:'/Links'},
      { text: 'Gravatar', link: 'https://gravatar.com/kenchou2006' },
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/kenchou2006' },
      { icon: 'github', link: 'https://github.com/kenchou2006' },
    ],
  },
  rewrites: {
    'README.md': 'index.md',
  },

  head: [
    ['link', { rel: 'icon', href: 'https://github.githubassets.com/favicons/favicon.svg' }],
    ['link', { rel: 'icon', href: 'https://github.githubassets.com/favicons/favicon-dark.svg', media: '(prefers-color-scheme: dark)' }],
  ]
})
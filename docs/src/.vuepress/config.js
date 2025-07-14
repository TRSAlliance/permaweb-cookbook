module.exports = {
  base: '/docs/',   // or '/' if root
  title: 'TRS Permaweb Cookbook',
  description: 'Immutable Knowledge Layer for Trust Systems',
  themeConfig: {
    repo: 'TRSAlliance/permaweb-cookbook',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': { lang: 'en-US', title: 'Cookbook', description: 'TRS Memory Layer' },
      '/id/': { lang: 'id', title: 'Buku Panduan', description: 'Lapisan Memori TRS' },
      // ...
    },
  },
}

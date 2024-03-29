const fetch = require('isomorphic-unfetch')

const baseDirectory = '/testNext'

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? baseDirectory : '',
  basePath: process.env.NODE_ENV === 'production' ? baseDirectory : '',
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    const shows = data.map((entry) => entry.show)

    shows.forEach((show) => {
      paths[`/p/${show.id}`] = { page: '/p/[id]', query: { id: show.id } }
    })

    return paths
  },
}

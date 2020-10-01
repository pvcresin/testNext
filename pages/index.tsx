import { NextPage } from 'next'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

type Show = { id: number; name: string }

const IndexPage: NextPage<{ shows: Show[] }> = ({ shows }) => (
  <>
    <h1>Home</h1>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <Link href='/p/[id]' as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
)

IndexPage.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data: { show: Show }[] = await res.json()

  return {
    shows: data.map((entry) => entry.show),
  }
}

export default IndexPage

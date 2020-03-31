import { NextPage } from 'next'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

const Post: NextPage<{
  show: {
    name: string
    summary: string
    image: { medium: string }
  }
}> = ({ show }) => (
  <>
    <h1>{show.name}</h1>
    <p>{show.summary}</p>
    <img src={show.image.medium} />
  </>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post

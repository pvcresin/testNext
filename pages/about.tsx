import { NextPage } from 'next'
import Link from 'next/link'

const AboutPage: NextPage = () => (
  <>
    <h1>About</h1>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
  </>
)

export default AboutPage

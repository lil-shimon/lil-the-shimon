import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/organisms/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lil The Shimon</title>
      </Head>

      <Header />
    </div>
  )
}

export default Home

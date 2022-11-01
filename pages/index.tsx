import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/organisms/header'
import { Hero } from '../components/organisms/hero'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Lil The Shimon</title>
      </Head>
      <Header />

      <section id="hero">
        <Hero />
      </section>
    </div>
  )
}

export default Home

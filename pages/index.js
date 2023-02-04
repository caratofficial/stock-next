import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Thanyaluck Page</h1>
      <p>
        This is a sample page for Thanyaluck      
      </p>
      <Link href="/about">About</Link>      
    </>
  )
}


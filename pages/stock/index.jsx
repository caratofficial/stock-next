import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ stocks }) {

  function deleteStock(id) {
    fetch(`http://localhost:3000/api/stock/products/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Stocks</title>
      </Head>
      <h1>Stocks</h1>
      <table><tbody>
        {
          stocks.map(stock => {
            return (
              <tr key={stock._id}>
                <td>
                  <Link href={`/blogs/${stock._id}`}>
                    {stock.name}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteStock(stock._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/stock/products/`)
  const stocks = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { stocks } }
}
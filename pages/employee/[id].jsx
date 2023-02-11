import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function EmployeePage(props) {
  const { employee } = props;

  if (!employee) return (<div>Loading...</div>)
  return (
    <>
      <Head>
        <title>Employees</title>
      </Head>
      <h1>{employee.title}</h1>
      <div>
        <p>${employee.description}</p>
        <p>${employee.price}</p>
      </div>
      <Link href="/employee">Back to Employee List</Link>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(`Fetching Employee ID: ${context.params['id']}`)
  console.debug(`Fetching ${process.env.APIURL}employee/${context.params['id']}`)
  const ret = await fetch(`${process.env.APIURL}employee/${context.params['id']}`)
  const employee = await ret.json()
  console.log(employee)
  return {
    props: {
      employee
    }
  }

}
import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header'
import Product from '../src/components/Product'
import Info from '../src/components/Info'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Sealjet</title>
        <link rel="shortcut icon" href="./img/logo.jpg" type="image/x-icon" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      </Head>
      <Header />
      <Product />
      <Info />
    </div>
  )
}

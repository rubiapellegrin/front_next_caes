import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Primeira página com Next</title>
      </Head>
      <h1>Usando NextJS</h1>
      <h2>API: {process.env.NEXT_PUBLIC_API_URL}</h2>
      <div class="list-group">
        <Link class="list-group-item list-group-item-action" href="/sobre">Sobre</Link>
        <Link class="list-group-item list-group-item-action" href="/CSR">CSR</Link>
        <Link class="list-group-item list-group-item-action" href="/SSR">SSR</Link>
        <Link class="list-group-item list-group-item-action" href="/SSG">SSG</Link>
        <Link class="list-group-item list-group-item-action" href="/ISR">ISR</Link>
      </div>

    </div>
  )
}

import { PrismicRichText } from '@prismicio/react'
import Header from '../../components/Header'
import { createClient } from '../../prismic/client'

export default function WorkPage({ doc }: { doc: any | null }) {
  console.log(doc)
  console.log(doc.data.content)
  return (
    <div>
      <Header></Header>
      <h1>about</h1>
      <span></span>
      <div className='prose text-2xl'>
        <PrismicRichText field={doc.data.content} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const client = createClient()
  const doc = await client.getSingle('about_page')

  return {
    props: {
      doc,
    },
  }
}

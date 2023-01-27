import { PrismicRichText } from '@prismicio/react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { createClient } from '../../prismic/client'

export default function WorkPage({ data }: { data: any[] | null }) {
  console.log(data)
  return (
    <>
      <Header></Header>
      <div className='px-10'>
        {data?.map((doc) => (
          <div
            key={doc.id}
            className='grid grid-cols-4 py-4 border-t border-black'
          >
            <div className='col-span-1'>
              <span>{doc.data.title}</span>
            </div>
            <div className='prose text-2xl col-span-3'>
              <PrismicRichText field={doc.data.description} />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient()
  const data = await client.getAllByType('service')

  return {
    props: {
      data,
    },
  }
}

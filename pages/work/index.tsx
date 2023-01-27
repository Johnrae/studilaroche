import { PrismicRichText } from '@prismicio/react'
import Header from '../../components/Header'
import { createClient } from '../../prismic/client'
import Image from 'next/image'
import Footer from '../../components/Footer'

export default function WorkPage({ data }: { data: any[] | null }) {
  console.log(data)
  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 px-10'>
        {data?.map((work) => (
          <div key={work.id} className='group hover:cursor-pointer'>
            <div className='relative  '>
              <Image
                className='grayscale group-hover:grayscale-0 transition-all'
                src={work.data.album_art.square.url}
                alt={`album art for the album ${work.data.title} by ${work.data.artist}`}
                width={500}
                height={500}
              />
              <div className='bg-cyan-600 h-full w-full mix-blend-screen group-hover:opacity-0 transition-all absolute inset-0'></div>
            </div>
            <p>{work.data.title}</p>
            <p>{work.data.artist}</p>

            <div className='prose text-2xl col-span-3'>
              <PrismicRichText field={work.data.description} />
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
  const data = await client.getAllByType('work', {
    orderings: [
      {
        field: 'document.release_date',
        direction: 'desc',
      },
    ],
  })

  return {
    props: {
      data,
    },
  }
}

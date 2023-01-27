import { PrismicRichText } from '@prismicio/react'
import Header from '../../components/Header'
import Image from 'next/image'
import { createClient } from '../../prismic/client'
import Footer from '../../components/Footer'

export default function AboutPage({ doc }: { doc: any | null }) {
  console.log(doc)
  console.log(doc.data.content)
  return (
    <>
      <Header></Header>
      <div className='px-10 relative'>
        <div className='hidden md:block absolute top-0 left-10 w-[50%] '>
          <div className='relative h-[600px] overflow-hidden'>
            <Image
              className='absolute top-[50%] -translate-y-[50%] grayscale contrast-125 brightness-125'
              src={'/coffee.jpg'}
              alt={'Ben Price enjoying a cup of joe'}
              width={500}
              height={600}
            />
            <div className='h-full w-[500px] z-10 absolute top-0 mix-blend-screen bg-cyan-600'></div>
          </div>
        </div>
        <div className='md:grid grid-cols-4 gap-10 relative z-30 md:pt-20'>
          <div className='col-span-1'></div>
          <div className='prose text-2xl col-span-3 text-black'>
            <PrismicRichText field={doc.data.content} />
          </div>
        </div>
      </div>
      <Footer />
    </>
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

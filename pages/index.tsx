'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useLayoutEffect } from 'react'
import { runCanvasAnimation } from '../utils/canvas'
import { gsap } from 'gsap'
import Header from '../components/Header'
import { PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismic/client'
import Footer from '../components/Footer'
import * as NextImage from 'next/image'

export default function Home({ doc }: { doc: any | null }) {
  useLayoutEffect(() => {
    let img = new Image()
    img.src = '/main.jpg'

    const { stop } = runCanvasAnimation(img)

    return () => stop()
  }, [])

  // useLayoutEffect(() => {
  //   gsap.fromTo(
  //     '.grayscale',
  //     {
  //       filter: 'grayscale(0)',
  //     },
  //     {
  //       filter: 'grayscale(1)',
  //       duration: 1,
  //       delay: 1,
  //     }
  //   )
  //   gsap.fromTo(
  //     '.overlay',
  //     { opacity: 0 },
  //     { opacity: 1, duration: 1, delay: 1 }
  //   )
  //   gsap.timeline()
  // }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=''>
        <div className='title absolute w-full top-0 flex z-50 bg-white'>
          <Header></Header>
        </div>

        <div className='h-screen w-screen'>
          <canvas className='h-screen w-screen block absolute top-0 left-0 grayscale'></canvas>
          <div className='overlay h-screen w-screen bg-cyan-600 absolute z-10 mix-blend-screen'></div>
        </div>

        <div className='py-24'>
          <div className='px-10 relative'>
            <div className='hidden md:block absolute top-0 left-10 w-[50%] '>
              <div className='relative h-[600px] overflow-hidden'>
                {/* @ts-expect-error */}
                <NextImage
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
        </div>
        <Footer />
      </main>
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

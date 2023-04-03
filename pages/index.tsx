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

  const oldWork = doc.data.older_work.split(', ')
  const newWork = doc.data.recent_work.split(', ')

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
        <title>Studilaroche</title>
        <meta name='description' content='Mixing, Mastering, et al.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#fadadd' />
      </Head>
      <main className=''>
        <div className='title absolute w-full top-0 flex z-50 bg-white'>
          <Header></Header>
        </div>

        <div className='h-screen w-screen'>
          <div className='overlay h-screen w-screen bg-pink-400 absolute z-10 mix-blend-multiply'></div>
          <canvas className='h-screen w-screen block absolute top-0 left-0 contrast-125 brightness-125 grayscale invert'></canvas>
          <div className='overlay h-screen w-screen bg-cyan-600 absolute z-10 mix-blend-screen'></div>
        </div>

        <div className='py-10'>
          <div className='px-10 mx-auto'>
            <div className='group h-[400px] sm:h-[500px] w-full sm:w-[400px] mr-10 mb-5 relative overflow-hidden float-left'>
              <div className='h-full w-[500px] absolute top-0 mix-blend-multiply bg-pink-400 group-hover:opacity-0 transition-all'></div>
              {/* @ts-expect-error */}
              <NextImage
                className='absolute top-[50%] -translate-y-[50%] grayscale group-hover:grayscale-0 contrast-125 brightness-125 group-hover:contrast-100 group-hover:brightness-100'
                src={'/portrait.jpg'}
                alt={'Ben Price enjoying a cup of joe'}
                width={500}
                height={600}
              />
              <div className='h-full w-[500px] absolute top-0 mix-blend-screen bg-cyan-600 group-hover:opacity-0 transition-all'></div>
            </div>
            <div className='prose mx-auto text-black text-2xl'>
              <PrismicRichText field={doc.data.content} />

              <div className='my-10'>
                <h2 className='text-2xl uppercase font-normal mb-4'>
                  Recent Work
                </h2>
                <ul className='pl-4 mb-0 marker:text-black columns-2 md:columns-3'>
                  {newWork.map((work: string) => (
                    <li className='text-base my-0' key={work}>
                      {work}
                    </li>
                  ))}
                </ul>

                <h2 className='text-2xl uppercase font-normal mb-4'>
                  Older Work
                </h2>
                <ul className='pl-4 mb-0 marker:text-black columns-2 md:columns-3'>
                  {oldWork.map((work: string) => (
                    <li className='text-base my-0' key={work}>
                      {work}
                    </li>
                  ))}
                </ul>
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

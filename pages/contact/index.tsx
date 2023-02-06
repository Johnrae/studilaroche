import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <Header></Header>
      <div className='px-10 grid grid-cols-8 gap-10'>
        <div className='col-span-8 md:col-span-4 lg:col-span-3'>
          <p className='text-2xl '>{"I'd love to hear from you."}</p>
          <p className='text-2xl'>
            You can contact me at{' '}
            <a href='mailto:studilaroche@gmail.com' className='underline'>
              studilaroche@gmail.com
            </a>
          </p>
        </div>

        <div className='col-span-8 md:col-span-4 lg:col-span-5 relative'>
          <Image
            src='/controls.jpg'
            className='grayscale'
            alt={'The control room'}
            width={1855}
            height={1243}
          />
          <div className='h-full w-full z-10 absolute top-0 mix-blend-screen bg-cyan-600'></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

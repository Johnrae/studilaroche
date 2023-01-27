import Link from 'next/link'

export default function Header() {
  return (
    <div className='w-full bg-white px-10 py-5'>
      <div className='w-full'>
        <Link href='/'>
          {/* eslint-disable-next-line */}
          <img src='/logo.svg' alt='studilaroche' className='w-full'></img>
        </Link>
      </div>

      <div className='w-full grid grid-cols-4 gap-10 mt-4'>
        <div className='col-span-4 md:col-start-3 md:col-span-2 flex w-full justify-between'>
          <Link href='/about'>About</Link>
          <Link href='/services'>Services</Link>
          <Link href='/work'>Work</Link>
          <a href='mailto:ben@studilaroche.com'>Contact</a>
        </div>
      </div>
    </div>
  )
}

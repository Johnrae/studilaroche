import Link from 'next/link'

export default function Header() {
  return (
    <div className='w-full bg-white p-4'>
      <div className='w-full'>
        <Link href='/'>
          {/* eslint-disable-next-line */}
          <img src='/logo.svg' alt='studilaroche' className='w-full'></img>
        </Link>
      </div>

      <div className='w-full flex flex-row justify-end space-x-16 text-xl'>
        <Link href='/about'>About</Link>
        <Link href='/services'>Services</Link>
        <Link href='/work'>Work</Link>
        <a href='mailto:ben@studilaroche.com'>Contact</a>
      </div>
    </div>
  )
}

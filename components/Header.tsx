import Link from 'next/link'

export default function Header() {
  return (
    <div className='w-full bg-white p-4'>
      {/* eslint-disable-next-line */}
      <img src='/logo.svg' alt='studilaroche'></img>

      <div className='w-full flex flex-row justify-between text-lg'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/work'>Work</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

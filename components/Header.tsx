import Link from 'next/link'

export default function Header() {
  return (
    <div className='w-full bg-white px-4'>
      <h1 className='text-8xl uppercase w-full text-center'>Studilaroche</h1>

      <div className='w-full flex flex-row justify-between text-lg'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/work'>Work</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

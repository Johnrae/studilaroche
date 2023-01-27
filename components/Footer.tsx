export default function Footer() {
  return (
    <div className='sticky top-[100vh] mt-20 border-t border-black'>
      <div className='md:grid grid-cols-4 gap-10 px-10 py-8'>
        <div className='col-span-2'>
          <p>Studilaroche Productions Inc.</p>
          <p>&copy; {new Date().getFullYear()}, All Rights Reserved</p>
        </div>
        <div className=''>
          <p>Atlanta, GA</p>
          <p>studilaroche@gmail.com</p>
        </div>
        <div className=''>
          <p>By Appointment Only</p>
        </div>
      </div>
    </div>
  )
}

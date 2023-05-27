import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800'>
      <div className="container">
        <div className='flex justify-between py-[50px] text-gray-400 text-[15px]'>
          <ul className='flex gap-[30px]'>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">License</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
          <span>© 2020 LevelM4 Theme by Mobirise</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
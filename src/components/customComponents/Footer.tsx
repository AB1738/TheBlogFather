import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-black '>
        <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-200 text-center py-4 font-semibold'>&copy; {new Date().getFullYear()} All rights reserved. Made with Next.js</p>
  </footer>
  )
}

export default Footer
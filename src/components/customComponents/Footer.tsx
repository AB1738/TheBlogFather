import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-black '>
        <p className='text-sm text-gray-600 dark:text-gray-200 text-center py-4'>&copy; {new Date().getFullYear()} All rights reserved. Made with Next.js</p>
  </footer>
  )
}

export default Footer
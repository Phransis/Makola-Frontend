import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
      <>
            <h1 className='py-3'>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go back to Home</Link>
      </>
  )
}

export default NotFoundPage
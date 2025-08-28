import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'60vh'}} className='d-flex flex-column justify-content-center align-items-center my-5'>
      <img width={'300px'} src="https://webartdevelopers.com/blog/wp-content/uploads/2018/10/CodePen-404-Page.gif" alt="" />
      <h1>Page Not Found</h1>
      <h5 className='my-4'>Sorry,We couldn't find the page.</h5>
      <Link to={'/'}className="btn btn-primary">Back to Home</Link>
      </div>

  )
}

export default PageNotFound



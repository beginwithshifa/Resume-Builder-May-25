import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
    <section style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://www.experis.com/-/media/project/manpowergroup/experis/experis-us/articles/all_financial_planning_bluewash_rgb_150.jpg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} id='part1'>
     <div className="row pt-5">
      <div className="col-12 col-md-4"></div>
      <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center">
         <h3>Designed to get hired.</h3>
         <h4>Your skills,Your story,your next job - all in one.</h4>
         <Link to={'/resume'}>
         <button className="btn btn-primary">Make Your Resume</button>
         </Link>
      </div>
      <div className="col-12 col-md-4"></div>
     </div>
    </section>
    </div>
  )
}

export default LandingPage



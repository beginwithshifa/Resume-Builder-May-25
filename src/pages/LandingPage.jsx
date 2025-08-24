import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <section className="container-fluid fisrt" style={{ width: '100%', overflowX: 'hidden', height: '450px', backgroundImage: "url('https://www.experis.com/-/media/project/manpowergroup/experis/experis-us/articles/all_financial_planning_bluewash_rgb_150.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} id='part1'>
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: "rgb(255,255,255,0.3" }}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills,Your story,your next job - all in one.</h4>
            <Link to={'/resume'}>
              <button className="btn" style={{ backgroundColor: 'purple' }}>Make Your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
      {/* tools */}
      <section className="tools p-5">
        <h1 className='text-center'>Tools</h1>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards</p>

            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters</p>

            <h4>Jobs</h4>
            <p>Automaticay receive new and relevant job posting</p>

            <h4>Application</h4>
            <p>Effortlessly manage and track your job application in an organised manner</p>

          </div>
          <div className="tool-image col-12 col-md-6">
            <img className='w-75 ms-5' src="https://www.livecareer.com/lcapp/uploads/2024/12/hero-banner-resume.png" alt="tools" />
          </div>
        </div>
      </section>
      <section className="second" style={{ width: '100%', overflowX: 'hidden', height: '450px', backgroundImage: "url('https://www.theforage.com/blog/wp-content/uploads/2023/04/What-Is-a-Panel-Interview.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} id='part1'>
      </section>
      {/* testimony */}
      <section className="tools p-5">
        <h1 className='text-center my-3'>Testimony</h1>
        <div className='row align-items-center p-5'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h3 className='mb-5'>Trusted by professionals worldwide.</h3>
            <p className='fs-5'>At Livecareer,we dont just help you createresumes -we help you land the job.whether you're a seasoned professional or just starting out,our tools are designed to get results.</p>
             <p className='fs-5'>In fact,users who used LiveCareer reported getting hired an average of 48 days faster.</p>
             <p className='fs-5'>Join thousands of job-seekers who've fast-tracked their careers with a resume that truly stands out.</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <div className="row">
            <div className="col-3">
              <img className ='w-100'src="https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg?semt=ais_hybrid&w=740" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1584999734482-0361aecad844?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>

            </div>
            <div className="row my-3">
            <div className="col-3">
              <img className ='w-100'src="https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg?semt=ais_hybrid&w=740" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1584999734482-0361aecad844?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>

            </div>
            <div className="row">
            <div className="col-3">
              <img className ='w-100'src="https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg?semt=ais_hybrid&w=740" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="col-3">
              <img className ='w-100'src="https://images.unsplash.com/photo-1584999734482-0361aecad844?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>

            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default LandingPage



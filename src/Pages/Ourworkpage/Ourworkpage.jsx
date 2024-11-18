import React from 'react'
import './Ourwork.css'
import Header from '../../../src/component/Header/Header'
// import WorkGallery from '../../../src/component/WorkGallery/Workgallery'
import PicSection from '../../../src/component/VideoSection/Video'
import Workflow from  "../../../src/component/Workflow/Workflow"
import FAQ from '../../../src/component/FAQS/Faqs'
import Footer from '../../../src/component/Footer/Footer'

function WorkLibrary()  {
  return (
    <div className="work-library">
      <h2 className="title">Our Work Library</h2>
      <p className="description">
        We are a bunch of passionate Product Designers & Frontend engineers,
        working directly with cool tech companies across the globe as their on-the-go
        Product Design & Frontend Teams.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <div className="">
            <img className='image-placeholder' src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg" alt="" />
          </div>
         <a href="/graphics.html" style={{textDecoration: 'none', color: 'black'}}> <p>UI/UX Design</p></a>
        </div>
        <div className="grid-item">
          <div className="">
            <img className='image-placeholder' src="https://media.licdn.com/dms/image/D4D12AQHwXw8R3fNPHg/article-cover_image-shrink_600_2000/0/1685911522054?e=2147483647&v=beta&t=Lhid4Rr_H4krXZh-b_E7410lrH9XenkKik7KovqbdXw" alt="" />
          </div>
          <a href="./graphics.html" style={{textDecoration: 'none', color: 'black'}}><p>Frontend Development</p></a>
        </div>
        <div className="grid-item">
          <div className="">
            <img className='image-placeholder' src="https://media.istockphoto.com/id/1458970567/vector/design-brochure-flyer-business-template.jpg?s=612x612&w=0&k=20&c=EaaIYuTaMiZR7msPUxsUET8ryvjmnkJlIQ9EdKQl3mo=" alt="" />
          </div>
          <a href="./graphics.html" style={{textDecoration: 'none', color: 'black'}}><p>Logo & Flyer Design</p></a>
        </div>
        <div className="grid-item">
          <div className="">
            <img className='image-placeholder' src="https://cdn.pixabay.com/photo/2019/12/16/04/17/social-media-4698431_640.jpg" alt="" />
          </div>
         <a href="./graphics.html" style={{textDecoration: 'none', color: 'black'}}> <p>Digital Media Design</p></a>
        </div>
        <div className="grid-item">
          <div className="">
            <img className='image-placeholder' src="https://img.lovepik.com/photo/48008/5919.jpg_wh860.jpg" alt="" />
          </div>
          <a href="./graphics.html" style={{textDecoration: 'none', color: 'black'}}><p>2D & 3D Animation</p></a>
        </div>
        <div className="grid-item">
          <div className="">
            <img className='image-placeholder' src="https://media.istockphoto.com/id/2015825825/photo/devops-software-development-operations-programmer-administration-system-life-cycle-quality.jpg?s=612x612&w=0&k=20&c=eih7PTfZpUkLiqiqnRuOVF047ufdEb4xa4aZSNo5UIo=" alt="" />
          </div>
          <a href="./graphics.html" style={{textDecoration: 'none', color: 'black'}}><p>DevOps</p></a>
        </div>
      </div>
    </div>
  );
};


function Ourworkpage() {
  return (
    <div>
        <Header/>
        <WorkLibrary/>
        <PicSection/>
        <PicSection/>
        <PicSection/>
        <Workflow/>
        
        <FAQ bgColor="white" /> 
    
        <Footer/>
    </div>
  )
}

export default Ourworkpage
import React from 'react';
import './Workgallery.css'; // Assuming the custom CSS is in this file

const WorkGallery = ({ bgColor }) => {
  return (
    <div className="work-gallery" style={{ backgroundColor: bgColor }}>
      {/* Title */}
      <h2 className="gallery-title">Work Gallery</h2>

      {/* Gallery Row with Loop Animation */}
      <div className="gallery-marquee">
        <div className="gallery-container">
          {/* Repeat each item twice for smooth looping */}
          <div className="gallery-item">
            <a href="/graphics.html"><img src="https://media.istockphoto.com/id/1294971867/vector/devops-software-development-and-it-operation-methodology.jpg?s=612x612&w=0&k=20&c=1wx83yJS4yKm0ObcIRTvzoGdSrJpJUdkRQNGrl7mUIU=" alt="Design" /></a>
            <a href="/graphics.html" style={{textDecoration: 'none'}}><p>Design</p></a>
          </div>
          <div className="gallery-item">
            <a href="/graphics.html" style={{textDecoration: 'none'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k-9j5FSrRoqIFryoZaBq8GY4VorG-QkPjw&s" alt="2D & 3D Animation" />
            <p>2D & 3D Animation</p></a>
          </div>
          <div className="gallery-item">
          <a href="/graphics.html" style={{textDecoration: 'none'}}><img src="https://t4.ftcdn.net/jpg/02/60/51/63/360_F_260516386_qKSZGbpEOJYUeXIYBYGbYYbsiWIpI6Uz.jpg" alt="DevOps" />
            <p>DevOps</p></a>
          </div>
          <div className="gallery-item">
          <a href="/graphics.html" style={{textDecoration: 'none'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k-9j5FSrRoqIFryoZaBq8GY4VorG-QkPjw&s" alt="2D & 3D Animation" />
            <p>2D & 3D Animation</p></a>
          </div>
         
          <div className="gallery-item">
            <a href="/" style={{textDecoration: 'none'}}><img src="https://media.istockphoto.com/id/1294971867/vector/devops-software-development-and-it-operation-methodology.jpg?s=612x612&w=0&k=20&c=1wx83yJS4yKm0ObcIRTvzoGdSrJpJUdkRQNGrl7mUIU=" alt="Design" />
            <p>Design</p></a>
          </div>
          <div className="gallery-item">
          <a href="/graphics.html" style={{textDecoration: 'none'}}><img src="https://t4.ftcdn.net/jpg/02/60/51/63/360_F_260516386_qKSZGbpEOJYUeXIYBYGbYYbsiWIpI6Uz.jpg" alt="DevOps" />
            <p>DevOps</p></a>
          </div>
         

          {/* Duplicate items for seamless looping */}
         
          
        </div>
      </div>
    </div>
  );
};

export default WorkGallery;

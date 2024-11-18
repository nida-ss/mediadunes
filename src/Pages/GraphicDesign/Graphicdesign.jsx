import React, { useState } from 'react';
import './Graphicdesign.css';
import Header from '../../component/Header/Header';
import ImageGrid from './Images';
import Workgallery from '../../component/WorkGallery/Workgallery';
import Footer from '../../component/Footer/Footer';

const GraphicDesignSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return {
          heading: "Graphic Design",
          content: (
            <p>
              Showing all graphic design projects... 
              <ImageGrid />
            </p>
          ),
        };
      case "Logos":
        return {
          heading: "Logos",
          content: <p>Showing logo design projects...
            <ImageGrid/>
          </p>,

        };
      case "Flyers":
        return {
          heading: "Flyers",
          content: <p>Showing flyer design projects...</p>,
        };
      case "Annual Reports":
        return {
          heading: "Annual Reports",
          content: <p>Showing annual report design projects...</p>,
        };
      case "Social Media":
        return {
          heading: "Social Media",
          content: <p>Showing social media design projects...</p>,
        };
      case "Others":
        return {
          heading: "Others",
          content: <p>Showing other design projects...</p>,
        };
      default:
        return {
          heading: "Graphic Design",
          content: <p>Showing all graphic design projects...</p>,
        };
    }
  };

  const { heading, content } = renderContent();

  return (
    <div>
      <Header />
      <div className="graphic-design-section text-center">
        <h2 className="graphic-title">{heading}</h2>
        <div className="nav-Tabs">
          {["All", "Logos", "Flyers", "Annual Reports", "Social Media", "Others"].map((tab) => (
            <span
              key={tab}
              className={`nav-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
        <p className="graphic-description">
          From Y Combinator startups to global enterprise FMCGs, our innovative model has allowed us to collaborate
          with cutting-edge tech companies worldwide, serving as their dedicated, on-demand product design and
          front-end team.
        </p>
        <div className="tab-content">{content}</div>
      </div>

      <Workgallery bgColor={'white'} />
      <Footer />
    </div>
  );
};

export default GraphicDesignSection;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Price.css";

const PricingCard = ({ title, price, features, buttonLabel, discount, originalPrice }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="pricing-card">
        {discount && <div className="tag">{discount}</div>}
        <h3>{title}</h3>
        <h2>{price}</h2>
        {originalPrice && <p className="original-price">{originalPrice}</p>}
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index}>
              <span className="tick-mark">✔</span> {feature}
            </li>
          ))}
        </ul>
        <a href="https://calendly.com/nida-ideal/call-with-media-dunes"><button className="demo-btnn btn"> {buttonLabel}</button></a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingData = [
    {
      title: "Product Design as a Service",
      price: "$3799/mo",
      features: [
        "Dedicated Product Designer",
        "Multiple Projects",
        "Real-time Collaboration on Slack / Microsoft Teams",
        "Daily Updates",
        "No contracts - Pause or cancel anytime",
      ],
      buttonLabel: "Book a Demo-call",
      discount: "Advance Design",
    },
    {
      title: "Product Design & Frontend Engineering as a Service",
      price: "$6399/mo",
      originalPrice: "$7000",
      features: [
        "Dedicated Product Designer",
        "Dedicated Frontend Engineer (Vue.js, Angular.js, React.js)",
        "Multiple Projects",
        "Real-time Collaboration on Slack / Microsoft Teams",
        "Daily Updates",
        "No contracts - Pause or cancel anytime",
      ],
      buttonLabel: "Book a Demo-call",
      discount: "Advance Combo",
    },
    {
      title: "Frontend Engineering as a Service",
      price: "$3799/mo",
      features: [
        "Dedicated Frontend Engineer (Vue.js, Angular.js, React.js)",
        "Multiple Projects",
        "Real-time Collaboration on Slack / Microsoft Teams",
        "Daily Updates",
        "No contracts - Pause or cancel anytime",
      ],
      buttonLabel: "Book a Demo-call",
      discount: "Advance Frontend",
    },
  ];

  return (
    <div className="pricing-section container">
      <h1>Flat & Simple Monthly Pricing</h1>
      <p>
        No hidden costs, no hiring cost, just pay only for the pure work. Save thousands with our Simple and Flat
        Monthly Pricing. All Plans come with a 7-day money-back guarantee, no questions asked.
      </p>
      <div className="row justify-content-center">
        {pricingData.map((data, index) => (
          <PricingCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;

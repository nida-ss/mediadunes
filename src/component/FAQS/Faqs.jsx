import React, { useState } from 'react';
import './Faqs.css';

const FAQ = ({ bgColor }) => { // Accept a bgColor prop
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    { question: 'For whom is this service designed?', answer: 'Designed to help growing SaaS and mobile app businesses accelerate their development and enhance their product offerings through expert design and frontend engineering expertise.' },
    { question: 'What types of designs does we specialize in?', answer: 'Media Dunes specializes in creating UI/UX designs, web applications, mobile apps, and more, focusing on user-centered designs.' },
    { question: 'What kind of Designs we can do?', answer: 'A full range of branding services encompassing logo design, banners, posters, flyers, brochures, banner ads, Facebook covers, stationery, billboards, and other marketing materials.' },
    { question: 'What are the advantages of our unlimited UI/UX and frontend development services?', answer: 'Our unlimited package offers unlimited design and development requests, ensuring efficient prioritization and timely delivery' },
    { question: 'Are API integration services included in your frontend development offerings?', answer: 'Our experienced frontend developers will seamlessly integrate your backend APIs into intuitive user interfaces, utilizing either React or Vue.js based on your preferences.' },
    { question: 'Can you clarify your policy for cancellations and refunds?', answer: 'Enjoy a 7-day no-questions-asked money-back guarantee. Cancellation is simple: just send us an email. You can also easily resume your subscription at any time.' },
    { question: 'How are you able to offer such cost-effective solutions?', answer: 'We offer competitive pricing by strategically leveraging our global team, which includes experienced product designers and frontend developers based in Southeast Asia.' },
    { question: 'Do I retain ownership of the designs created by Media dunes? Can I resell or license the work?', answer: 'The designs will be delivered to you with complete intellectual property rights, ensuring your full ownership and freedom to use them as desired.' }
  ];

  return (
    <div className="faq-section" style={{ backgroundColor: bgColor }}> {/* Apply bgColor as inline style */}
      <h2 className="faq-title">FAQ</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
            </button>
            {selectedQuestion === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

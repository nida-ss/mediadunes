import React from 'react';
import Price from "../../../src/component/Price/Price"; // Adjust the path if needed
import Header from '../../../src/component/Header/Header';
import Workflow from "../../..//src/component/Workflow/Workflow"
import FAQ from '../../../src/component/FAQS/Faqs';
import Footer from '../../../src/component/Footer/Footer';
function PricingPage() {
  return (
    <div>
        <Header/>
      <Price />
      <Workflow/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default PricingPage;

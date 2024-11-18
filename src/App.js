import Faqs from "./component/FAQS/Faqs";
import Feature from "./component/Feature/Feature";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Price from "./component/Price/Price"
import AuditCheklist from "./component/AuditCheklist/Auditcheklist";
import WorkflowSection from "./component/Workflow/Workflow";
import WorkGallery from "./component/WorkGallery/Workgallery";
import VideoSection from "./component/VideoSection/Video";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PictureSection from "./component/PictureSection/Picture";
import Customersreviews from "../src/component/CustomerReview/Customer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    
    <div >
      
      <Header/>
      <Feature/>
      <PictureSection/>
      <VideoSection/>
      <VideoSection/>
      <VideoSection/>
      <WorkGallery/>
      <WorkflowSection/>
      <AuditCheklist/>
      {/* <Customersreviews/> */}
      <Price/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;

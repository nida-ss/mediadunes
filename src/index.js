import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import Pricingpage from "./Pages/PricePage/Pricingpage"
import Ourworkpage from "./Pages/Ourworkpage/Ourworkpage"
import Audit from "./Pages/Auditpage/Audit"
import Contact from "./Pages/Contactus/Contactus"
import Blogs from "./Pages/Blogs/Blogs"
import Team from "./Pages/Team/Team"
import Graphics from './Pages/GraphicDesign/Graphicdesign'
import Career from './Pages/Careers/Careers'
import TermsAndConditions from './Pages/Terms-Conditions/Terms-Conditions';
 import Privacy from './Pages/PrivacyPolicy/Privacy'
 import CustomerReviews from '../src/component/CustomerReview/Customer'
import App from './App';
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />
  },
  {
    path: "pricing.html",
    element : <Pricingpage />
  },
  {
    path: "ourwork.html",
    element : <Ourworkpage />
  },
  {
    path: "audit.html",
    element : <Audit />
  },
  {
    path: "contact.html",
    element : <Contact />
  },
  {
    path: "blogs.html",
    element : <Blogs />
  },
  {
    path: "team.html",
    element: <Team/>
  },
  {
    path: "graphics.html",
    element: <Graphics/>
  },
  {
    path: 'career.html',
    element: <Career/>
  },
  {
    path: 'terms-conditions.html',
    element: <TermsAndConditions/>
  },
  {
    path: 'privacy-policy.html',
    element: <Privacy/>
  },
  {
    path: 'customer.html',
    element: <CustomerReviews/>
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
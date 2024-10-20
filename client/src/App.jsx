import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from '../ScrollToTop'  // Import ScrollToTop'

// Lazy-loaded components
const Home = React.lazy(() => import("./components/pages/Home"));
const Services = React.lazy(() => import("./components/pages/Services"));
const AboutUs = React.lazy(() => import("./components/pages/AboutUs"));
const Careers = React.lazy(() => import("./components/pages/Careers"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const OurMoreWorks = React.lazy(() => import("./components/pages/OurMoreWorks"));
const Onetouchagency = React.lazy(() => import("./components/pages/OneTouchProject"));

const WebsiteDevelopment = React.lazy(() => import("./components/pages/serviceSubPages/WebsiteDevelopment"));
const UIUX = React.lazy(() => import("./components/pages/serviceSubPages/UIUXDesigning"));
const SEO = React.lazy(() => import("./components/pages/serviceSubPages/SEO"));
const WebRedesign = React.lazy(() => import("./components/pages/serviceSubPages/WebsiteRedesigning"));
const PPC = React.lazy(() => import("./components/pages/serviceSubPages/PPC"));
const SMM = React.lazy(() => import("./components/pages/serviceSubPages/SMM"));

// Non-lazy components
// import Blog from "./components/pages/Blog";

function App() {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Navbar />
      <Routes>
        {/* Lazy loaded routes wrapped in Suspense */}
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<></>}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense fallback={<></>}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/careers"
          element={
            <Suspense fallback={<></>}>
              <Careers />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<></>}>
              <Contact />
            </Suspense>
          }
        />

        <Route
          path="/ourworks"
          element={
            <Suspense fallback={<></>}>
              <OurMoreWorks />
            </Suspense>
          }
        />
        <Route
          path="/ourworks/projects/ontouchagency"
          element={
            <Suspense fallback={<></>}>
              <Onetouchagency />
            </Suspense>
          }
        />

        <Route
          path="/services/website-development"
          element={
            <Suspense fallback={<></>}>
              <WebsiteDevelopment />
            </Suspense>
          }
        />
        <Route
          path="/services/ui-ux design"
          element={
            <Suspense fallback={<></>}>
              <UIUX />
            </Suspense>
          }
        />
        <Route
          path="/services/seo"
          element={
            <Suspense fallback={<></>}>
              <SEO />
            </Suspense>
          }
        />
        <Route
          path="/services/pay-per-click"
          element={
            <Suspense fallback={<></>}>
              <PPC />
            </Suspense>
          }
        />
        <Route
          path="/services/social-media-marketing"
          element={
            <Suspense fallback={<></>}>
              <SMM />
            </Suspense>
          }
        />
        <Route
          path="/services/website-redesigning"
          element={
            <Suspense fallback={<></>}>
              <WebRedesign />
            </Suspense>
          }
        />

        {/* Non-lazy loaded routes (No Suspense needed) */}
        {/* <Route path="/blogs" element={<Blog />} /> */}
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
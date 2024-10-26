import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "../ScrollToTop"; // Corrected import for ScrollToTop
import "./App.css";

// Lazy-loaded components
const Home = React.lazy(() => import("./components/pages/Home"));
const Services = React.lazy(() => import("./components/pages/Services"));
const AboutUs = React.lazy(() => import("./components/pages/AboutUs"));
const Careers = React.lazy(() => import("./components/pages/Careers"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const OurMoreWorks = React.lazy(() =>import("./components/pages/OurMoreWorks"));
const Onetouchagency = React.lazy(() =>import("./components/pages/OneTouchProject"));
const Sjacarecenter = React.lazy(() =>import("./components/pages/SJACareProject"));
const Journeyonwheels = React.lazy(() =>import("./components/pages/JourneyOnWheelsProject"));
const Divinefitness = React.lazy(() =>import("./components/pages/DivineFitnessProject"));


const WebsiteDevelopment = React.lazy(() =>
  import("./components/pages/serviceSubPages/WebsiteDevelopment")
);
const UIUX = React.lazy(() =>
  import("./components/pages/serviceSubPages/UIUXDesigning")
);
const SEO = React.lazy(() => import("./components/pages/serviceSubPages/SEO"));
const WebRedesign = React.lazy(() =>
  import("./components/pages/serviceSubPages/WebsiteRedesigning")
);
const PPC = React.lazy(() => import("./components/pages/serviceSubPages/PPC"));
const SMM = React.lazy(() => import("./components/pages/serviceSubPages/SMM"));

function App() {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Navbar />
      <Routes>
        {/* Lazy-loaded routes wrapped in Suspense */}
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/careers"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Careers />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/ourworks"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <OurMoreWorks />
            </Suspense>
          }
        />

        {/* our more work routes */}
        <Route
          path="/ourworks/projects/ontouchagency"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Onetouchagency/>
            </Suspense>
          }
        />

        <Route
          path="/ourworks/projects/journeyonwheels"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Journeyonwheels />
            </Suspense>
          }
        />

        <Route
          path="/ourworks/projects/sjacarecenter"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Sjacarecenter/>
            </Suspense>
          }
        />

        <Route
          path="/ourworks/projects/divine-fitness"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <Divinefitness/>
            </Suspense>
          }
        />

        {/* service routes */}
        <Route
          path="/services/website-development"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <WebsiteDevelopment />
            </Suspense>
          }
        />
        <Route
          path="/services/ui-ux-design"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <UIUX />
            </Suspense>
          }
        />
        <Route
          path="/services/seo"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <SEO />
            </Suspense>
          }
        />
        <Route
          path="/services/pay-per-click"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <PPC />
            </Suspense>
          }
        />
        <Route
          path="/services/social-media-marketing"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <SMM />
            </Suspense>
          }
        />
        <Route
          path="/services/website-redesigning"
          element={
            <Suspense
              fallback={
                <div className="flex spinner text-white justify-center items-center w-full min-h-screen bg-[#011415]"></div>
              }
            >
              <WebRedesign />
            </Suspense>
          }
        />
      </Routes>

      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;

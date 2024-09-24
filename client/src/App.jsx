import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Lazy-loaded components
const Home = React.lazy(() => import("./components/pages/Home"));
const Services = React.lazy(() => import("./components/pages/Services"));
const AboutUs = React.lazy(() => import("./components/pages/AboutUs"));
const Careers = React.lazy(() => import("./components/pages/Careers"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const OurMoreWorks = React.lazy(() =>
  import("./components/pages/OurMoreWorks")
);

const Onetouchagency = React.lazy(() =>
  import("./components/pages/OneTouchProject")
);
// Non-lazy components
import Blog from "./components/pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Lazy loaded routes wrapped in Suspense */}

        {/* navbar-> nav-links */}
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<div>Loading Services...</div>}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense fallback={<div>Loading About Us...</div>}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/careers"
          element={
            <Suspense fallback={<div>Loading Careers page...</div>}>
              <Careers />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading Contact...</div>}>
              <Contact />
            </Suspense>
          }
        />


        {/* more work routes */}
        <Route
          path="/ourworks"
          element={
            <Suspense fallback={<div>Loading projects...</div>}>
              <OurMoreWorks />
            </Suspense>
          }
        />

        {/* our works->links */}
        <Route
          path="/ourworks/projects/ontouchagency"
          element={
            <Suspense fallback={<div>Loading projects...</div>}>
              <Onetouchagency />
            </Suspense>
          }
        />

        {/* Non-lazy loaded routes (No Suspense needed) */}
        <Route path="/blogs" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

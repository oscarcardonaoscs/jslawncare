import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OutdoorTransform from "./components/OutdoorTransform";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Services />
      <OutdoorTransform />
      <QuoteForm />
      <Footer />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import CompanyLogo from "./components/CompanyLogo";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './index.css';
import Preloader from "./components/Preloader";
import Purpose from "./components/Purpose";
import Features from "./components/Features";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  })

  return (
    isLoading ? (
      <Preloader />
    ) :  (
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -z-10 -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px]"></div>
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          <CompanyLogo />
          <Purpose />
          <Features />
        </div>
      </div>
    )
  )
}

export default App

import { useEffect, useRef } from "react"
import { cameraScreen, phone14, subway } from "../assets"

function About() {
  const slides = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight
      const scrollableDistance = scrollHeight - clientHeight
      const scrollPercentage = (scrollTop / scrollableDistance) * 100
      console.log(scrollPercentage)
      
      if(scrollPercentage <= 25) {
        slides.current!.className = "simulate-slides translate-x-0"
      } else if(scrollPercentage >= 25 && scrollPercentage <= 55) {
        slides.current!.className = "simulate-slides -translate-x-[33%]"
      } else if(scrollPercentage >= 55) {
        slides.current!.className = "simulate-slides -translate-x-[66%]"
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
 
  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <h1 className="text-7xl font-bold">This is a About</h1>
      </div>
      <div className="min-h-screen py-12 px-4">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
        <div className="sticky top-[10vh] grid place-items-center">
          <div className="simulate-img-cover relative overflow-x-hidden">
            <img src={phone14} className="simulate-img w-full max-w-[400px]" />
            <div ref={slides} className="simulate-slides">
              <img className="slide slide-1 object-cover" src={cameraScreen} />
              <img className="slide slide-1 object-cover" src={subway} />
              <div className="slide slide-3 bg-blue-500"></div>
            </div>
          </div>
        </div>
        <div className="min-h-screen">
          <div className="sticky top-[10vh] mix-blend-overlay">
            <h1 className="text-[10vw] font-extrabold text-center">PHOTOGRAPHY</h1>
          </div>
        </div>
        <div className="min-h-screen"></div>
        <div className="min-h-screen">
          <div className="sticky top-[10vh] mix-blend-overlay">
            <h1 className="text-[10vw] font-extrabold text-center">GAMING</h1>
          </div>
        </div>
        <div className="min-h-screen"></div>
        <div className="min-h-screen">
          <div className="sticky top-[10vh] mix-blend-overlay">
            <h1 className="text-[10vw] font-extrabold text-center">TEST</h1>
          </div>
        </div>
        <div className="min-h-screen"></div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
      </div>
    </>
  )
}

// add one more image
// add overlay text on the section
// add two more section

export default About
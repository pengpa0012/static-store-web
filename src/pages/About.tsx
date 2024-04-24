import { useEffect, useRef } from "react"
import { cable, cameraScreen, phone14, phoneHand, subway, youtube } from "../assets"

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
        <div className="sticky top-[8vh] grid place-items-center">
          <div className="simulate-img-cover relative overflow-x-hidden">
            <img src={phone14} className="simulate-img w-full max-w-[400px]" />
            <div ref={slides} className="simulate-slides">
              <img className="slide slide-1 object-cover" src={cameraScreen} />
              <img className="slide slide-1 object-cover" src={subway} />
              <div className="slide slide-3 bg-[#0f0f0f] grid place-items-center">
                <img src={youtube} className="w-[150px]"/>
              </div>
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
            <h1 className="text-[10vw] font-extrabold text-center">ENTERTAINMENT</h1>
          </div>
        </div>
        <div className="min-h-screen"></div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="sticky top-[10vh]">
          <img src={phoneHand}/>
          <div className="absolute inset-0 grid place-items-center z-[10]">
            <div className="text-center">
              <h3 className="text-5xl font-extrabold ml-[79px]">TEST</h3>
            </div>
          </div>
        </div>
        <div className="min-h-screen sticky top-[90vh]">
          <img src={cable}  className="absolute bottom-[-76px] left-[52%] max-w-[50px]"/>
        </div>
        <div className="min-h-screen"></div>
        <div className="min-h-screen"></div>
      </div>
      <div className="min-h-screen bg-white relative z-[2] grid place-items-center">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
      </div>
    </>
  )
}

// add one more image
// add overlay text on the section
// add two more section

export default About
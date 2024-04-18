import { useEffect, useRef } from "react"
import { phone14, subway } from "../assets"

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
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold">This is a About</h1>
      </div>
      <div className="min-h-screen grid place-items-center py-12 px-4">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
        <div className="sticky top-[10vh]">
          <div className="simulate-img-cover relative overflow-x-hidden">
            <img src={phone14} className="simulate-img w-full max-w-[400px]" />
            <div ref={slides} className="simulate-slides">
              <div className="slide slide-2 bg-green-500"></div>
              <img className="slide slide-1 object-cover" src={subway} />
              <div className="slide slide-3 bg-blue-500"></div>
            </div>
          </div>
        </div>
        <div className="min-h-screen"></div>
        <div className="min-h-screen"></div>
        <div className="min-h-screen"></div>
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

export default About
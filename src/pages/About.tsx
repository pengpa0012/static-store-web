import { useRef, useState } from "react"
import { phone14 } from "../assets"

function About() {
  const slides = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  function changeSlide(e: any) {
    const currentSlide = e.target.attributes["data-slide"].value
    setCurrentSlide(currentSlide)
    if(currentSlide == 1) {
      slides.current!.className = "simulate-slides translate-x-0"
    } else if(currentSlide == 2) {
      slides.current!.className = "simulate-slides -translate-x-[33%]"
    } else {
      slides.current!.className = "simulate-slides -translate-x-[66%]"
    }
  }

  return (
    <>
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold">This is a About</h1>
      </div>
      <div className="min-h-screen grid place-items-center py-12 px-4">
        <div className="simulate-img-cover relative overflow-x-hidden">
          <img src={phone14} className="simulate-img w-full max-w-[400px]" />
          <div ref={slides} className="simulate-slides">
            <div className="slide slide-1 bg-red-500"></div>
            <div className="slide slide-2 bg-green-500"></div>
            <div className="slide slide-3 bg-blue-500"></div>
          </div>
          <div className="simulate-dots">
            <div className={`dot ${currentSlide == 1 && "active"}`} data-slide="1" onClick={changeSlide}></div>
            <div className={`dot ${currentSlide == 2 && "active"}`} data-slide="2" onClick={changeSlide}></div>
            <div className={`dot ${currentSlide == 3 && "active"}`} data-slide="3" onClick={changeSlide}></div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="min-h-screen grid place-items-center">
          <div className="flex gap-5 px-4">
            <p className="text-4xl flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium accusantium nemo sapiente possimus consequuntur blanditiis culpa ipsam voluptatem consectetur et eveniet dolorem dolorum, a nulla? Nostrum impedit natus ducimus.</p>
            <div className="w-[250px] h-[350px] bg-red-300 flex-1"></div>
          </div>
        </div>
        <div className="min-h-screen grid place-items-center">
          <div className="flex gap-5 px-4">
            <div className="w-[250px] h-[350px] bg-red-300 flex-1"></div>
            <p className="text-4xl flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium accusantium nemo sapiente possimus consequuntur blanditiis culpa ipsam voluptatem consectetur et eveniet dolorem dolorum, a nulla? Nostrum impedit natus ducimus.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
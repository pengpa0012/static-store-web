import { useEffect, useRef } from 'react'
import { close1, close6, close7, flat, phone1, phone15, phone16, phone17, phone18, phone2, phone3, slide1, slide2, slide3, slide4, slide5, test2 } from "./assets/index"
import './App.css'
import React from 'react'
import { featContent } from './util/content'
import Product from './components/Product'

function App() {
  const productRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = (e: any) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement
      const position = Math.ceil(
          (scrollTop / (scrollHeight - clientHeight)) * 100
      )
      if(position < 30) {
        // adjust the value here
        console.log("yeyes")
        productRef.current!.style.transform = `translateY(${-(position * 30)}px) scale(${position * 0.4})`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='overflow-x-clip'>
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold text-center">This is a heading</h1>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <img ref={productRef} className="w-[300px] transition-all duration-100" src={test2}/>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center">Something text here...</h2>
      </div>
      <div className="min-h-screen"></div>
      <div className="px-4">
        <div className="min-h-screen sticky top-[150px]">
          <div className="relative max-w-[800px]">
            <img src={phone15} className="w-full" />
          </div>
        </div>
        {
          ["Good for filming","Photography","and Gaming..."].map(el => (
            <div className='min-h-screen flex justify-end' key={el}>
              <p className="text-7xl font-bold leading-snug w-1/2">{el}</p>
            </div>
          ))
        }
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className=" min-h-screen">
          <div className="sticky top-[90vh]">
            <div className="flat-image">
              <img src={flat} className="w-full" />
            </div>
          </div>
          <div className="min-h-screen"></div>
          <div className="relative z-[-2]">
            <p className="text-6xl text-center font-bold leading-snug py-24">Make memories...</p>
            {
              [slide1,slide2,slide3,slide4,slide5].map((el, i) => (
                <React.Fragment key={i}>
                  <img src={el} className="w-full max-w-[1000px] h-[477px] aspect-square" />
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center">Capture the moments...</h2>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className='image-slider'>
          <img src={phone18} className="w-full max-w-[1000px] z-10 pointer-events-none" />
        </div>
        <div className="slider py-12 flex gap-5 -translate-y-[92%]">
          {
            [slide1,slide2,slide3,slide4,slide5,slide1,slide2,slide3,slide4,slide5].map((el, i) => (
              <React.Fragment key={i}>
                <img src={el} className="w-full max-w-[1000px] h-[477px] invert" />
              </React.Fragment>
            ))
          }
        </div>    
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="flex items-center gap-10">
          <div className='flex flex-1 flex-col gap-5'>
            <h3 className="text-4xl font-bold mb-4">Phone Model Here</h3>
            <div className="flex gap-5">
              {
                featContent[0].map((el, i) => (
                  <div className="flex flex-1 gap-2 items-center rounded-md p-2" key={i}>
                    <img src={el.icon} className='w-[50px] h-[50px]' />
                    <div className="flex flex-col text-nowrap">
                      <p className="text-xs
                      ">{el.text}</p>
                      <p className="text-xs
                      ">{el.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="flex gap-5">
              {
                featContent[1].map((el, i) => (
                  <div className="flex flex-1 gap-2 items-center rounded-md p-2" key={i}>
                    <img src={el.icon} className='w-[50px] h-[50px]' />
                    <div className="flex flex-col text-nowrap">
                      <p className="text-xs
                      ">{el.text}</p>
                      <p className="text-xs
                      ">{el.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="flex gap-5">
              {
                featContent[2].map((el, i) => (
                  <div className="flex flex-1 gap-2 items-center rounded-md p-2" key={i}>
                    <img src={el.icon} className='w-[50px] h-[50px]' />
                    <div className="flex flex-col text-nowrap">
                      <p className="text-xs
                      ">{el.text}</p>
                      <p className="text-xs
                      ">{el.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <h4 className="text-3xl font-bold mt-12">SRP: ₱56,990</h4>
          </div>
          <img src={phone17} className='flex-1 h-[450px] object-cover'/>
        </div>
      </div>
      <div className='min-h-screen max-w-[1440px] mx-auto px-4'>
        <h4 className="text-5xl font-bold mb-4">Heading.<br /> Lorem ipsum dolor sit.</h4>
        <div className="flex flex-col justify-center gap-1">
          <img src={close1} className='w-full max-h-[600px] aspect-square object-cover'/>
          <div className="flex gap-1">
            <img src={close6} className='w-1/2 max-h-[500px] flex-1/2 aspect-square object-cover'/>
            <img src={close7} className='w-1/2 max-h-[500px] flex-1/2 aspect-square object-cover'/>
          </div>
          <div className="flex gap-1">
            <img src={phone1} className='w-4/12 max-h-[400px] aspect-square object-cover'/>
            <img src={phone2} className='w-4/12 max-h-[400px] aspect-square object-cover'/>
            <img src={phone3} className='w-4/12 max-h-[400px] aspect-square object-cover'/>
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center py-48">
        <h2 className="text-7xl font-bold text-center pb-20">Something text here...</h2>
        <div className="flex gap-8">
          {
            [1,2,3].map(el => (
              <Product src={phone16} key={el} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App

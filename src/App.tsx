import { useEffect, useRef } from 'react'
import { close1, close6, close7, flat, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, phone1, phone10, phone15, phone17, phone18, phone2, phone3, slide1, slide2, slide3, slide4, slide5, test2 } from "./assets/index"
import './App.css'
import React from 'react'

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
          <img src={phone15} className="w-full max-w-[600px] ml-24" />
        </div>
        {
          [1,2,3].map(el => (
            <div className='min-h-screen flex justify-end' key={el}>
              <p className="text-5xl font-bold leading-snug w-1/2">Lorem ipsum dolor sit</p>
            </div>
          ))
        }
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="min-h-screen">
          <img src={flat} className="w-full sticky top-[40vh]" />
          <div className="min-h-screen"></div>
          <p className="text-5xl text-center font-bold leading-snug py-30">Lorem ipsum dolor sit</p>
          <div className="min-h-screen"></div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center">Capture the moments...</h2>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <img src={phone18} className="w-full max-w-[1000px] backdrop-hue-rotate-180 z-10 pointer-events-none px-4" />
        <div className="slider py-12 flex gap-5 -translate-y-[90%] overflow-x-scroll">
          {
            [slide1,slide2,slide3,slide4,slide5,slide1,slide2,slide3,slide4,slide5].map((el, i) => (
              <React.Fragment key={i}>
                <img src={el} className="w-full max-w-[1000px] h-[477px] hue-rotate-180" />
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
            <div className="flex gap-5">
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon1} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon2} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon3} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon4} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon5} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon6} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon7} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon8} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
              <div className="flex gap-2 border border-black rounded-md p-2">
                <img src={icon9} className='w-[50px] h-[50px]' />
                <p className="text-xs
                ">Some text</p>
              </div>
            </div>
          </div>
          <img src={phone17} className='flex-1 h-[450px] object-cover'/>
        </div>
      </div>
      <div className='min-h-screen max-w-[1440px] mx-auto px-4'>
        <h4 className="text-5xl font-bold mb-4">Heading.<br /> Lorem ipsum dolor sit.</h4>
        <div className="flex flex-col justify-center">
          <img src={close1} className='w-full max-h-[600px] aspect-square object-cover'/>
          <div className="flex">
            <img src={close6} className='w-1/2 max-h-[500px] flex-1/2 aspect-square object-cover'/>
            <img src={close7} className='w-1/2 max-h-[500px] flex-1/2 aspect-square object-cover'/>
          </div>
          <div className="flex">
            <img src={phone1} className='w-4/12 max-h-[400px] aspect-square object-cover'/>
            <img src={phone2} className='w-4/12 max-h-[400px] aspect-square object-cover'/>
            <img src={phone3} className='w-4/12 max-h-[400px] aspect-square object-cover'/>
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="flex gap-8">
          {
            [1,2,3].map(el => (
              <div className='text-center' key={el}>
                <img src={phone10} className="w-[250px] mb-4" />
                <h4 className='font-bold text-2xl'>Product name</h4>
                <p>Awesome</p>
                <p>₱56,990</p>
                <div className="flex justify-center gap-4 mt-4">
                  <button className='bg-blue-600 text-xs text-white rounded-full py-2 px-4'>Buy Now</button>
                  <button className='text-gray-600 text-xs'>Add to Cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App

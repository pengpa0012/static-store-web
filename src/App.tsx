import { useEffect, useRef } from 'react'
import { close1, close6, close7, cpu2, flat, imgSlider, imgSliderGray, memory, phone1, phone15, phone17, phone18, phone2, phone3, phone3Back, phone3Front, phone4Back, phone4Front, resistance, slide1, slide2, slide3, slide4, slide5, test2, vid1, vid2, vid3, vid4, vid5 } from "./assets/index"
import './App.css'
import React from 'react'
import { featContent, phoneFeatures } from './util/content'

function App() {
  const productRef = useRef<HTMLImageElement>(null)
  const heroImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = (e: any) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement
      const position = Math.ceil(
          (scrollTop / (scrollHeight - clientHeight)) * 100
      )
      if(position < 30) {
        productRef.current!.style.transform = `translateY(${-(position * 30)}px) scale(${position * 0.4})`
      }
      heroImgRef.current!.style.transform = `translateY(${-(position - 50)}%)`
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='overflow-x-clip'>
      <div className="min-h-screen relative">
        <div className="pt-[200px] text-center">
          <h1 className="text-7xl font-bold text-center mb-2">This is a heading</h1>
          <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, temporibus!</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className='bg-blue-600 text-md text-white rounded-full py-2 px-6'>Learn more</button>
            <button className='text-gray-600 text-md'>Learn more</button>
          </div>
        </div>
        <div ref={heroImgRef} className='duration-500 flex justify-around absolute bottom-0 left-0 right-0 translate-y-[50%] z-[-1]'>
          <img src={phone4Front} className="max-w-[400px]" />
          <img src={phone4Back} className="max-w-[400px]" />
          <img src={phone3Front} className="max-w-[400px]" />
          <img src={phone3Back} className="max-w-[400px]" />
        </div>
      </div>
      <div className="min-h-screen grid place-items-center bg-white">
        <h2 className="text-7xl font-bold text-center">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <img ref={productRef} className="w-[300px] transition-all duration-100" src={test2}/>
      </div>
      <div className='min-h-[300vh] relative'>
        <div className="min-h-screen flex justify-start items-center sticky top-0">
          <div className='w-[33.33%] relative'>
            <div className='text-center text-white absolute inset-0 grid place-items-center bg-black/50'>
              <div className='px-4'>
                <h2 className="text-4xl">CPU</h2>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, unde?</p>
              </div>
            </div>
            <img src={cpu2} className='w-full h-[500px] object-cover aspect-square' />
          </div>
        </div>
        <div className="min-h-screen flex justify-center items-center sticky top-0">
          <div className='w-[33.33%] relative'>
            <div className='text-center text-white absolute inset-0 grid place-items-center bg-black/50'>
              <div className='px-4'>
                <h2 className="text-4xl">RAM</h2>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, unde?</p>
              </div>
            </div>
            <img src={memory} className='w-full h-[500px] object-cover aspect-square' />
          </div>
        </div>
        <div className="min-h-screen flex justify-end items-center sticky top-0">
          <div className='w-[33.33%] relative'>
            <div className='text-center text-white absolute inset-0 grid place-items-center bg-black/50'>
              <div className='px-4'>
                <h2 className="text-4xl">Resistance</h2>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, unde?</p>
              </div>
            </div>
            <img src={resistance} className='w-full h-[500px] object-cover aspect-square' />
          </div>
        </div>
        <div className="min-h-screen"></div>
      </div>
      <div className="min-h-screen"></div>
      <div className="px-4">
        <div className="min-h-screen sticky top-[150px]">
          <div className="relative max-w-[800px]">
            <img src={phone15} className="w-full" />
          </div>
        </div>
        {
          phoneFeatures.map((el, i) => (
            <div className='min-h-screen flex justify-end' key={i}>
              <div className='w-1/2 px-4'>
                <h3 className="text-7xl mb-4 font-bold leading-snug">{el.title}</h3>
                <p className="text-xl">{el.description}</p>
                {
                  i == 0 &&
                  <div className='mx-auto my-12'>
                    <p className="text-sm mb-2">Available colors:</p>
                    <div className="flex gap-4">
                      <div className="w-[40px] h-[40px] bg-red-500 rounded-full"></div>
                      <div className="w-[40px] h-[40px] bg-gray-500 rounded-full"></div>
                      <div className="w-[40px] h-[40px] bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                }
                {
                  i == 1 &&
                  <div className='mx-auto my-12'>
                    <p className="text-sm mb-2">Slider</p>
                    <div className="image-compare">
                      <div> 
                        <img src={imgSlider}/> 
                      </div> 
                      <img src={imgSliderGray}/> 
                    </div>
                  </div>
                }
              </div>
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
              [vid1,vid2,vid3,vid4,vid5].map((el, i) => (
                <div className="w-full max-w-[1000px] h-[419px] aspect-square" key={i}>
                  <video autoPlay muted loop className='w-full h-full' src={el}></video>
                </div>
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
                      <p className="text-xs">{el.text}</p>
                      <p className="text-xs whitespace-pre">{el.description}</p>
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
                      <p className="text-xs">{el.text}</p>
                      <p className="text-xs whitespace-pre">{el.description}</p>
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
                      <p className="text-xs">{el.text}</p>
                      <p className="text-xs whitespace-pre">{el.description}</p>
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
      <div className='min-h-screen max-w-[1440px] mx-auto px-4 py-56'>
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
    </div>
  )
}

export default App

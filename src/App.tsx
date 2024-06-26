import {useEffect, useRef } from 'react'
import { close1, close6, close7, cpu2, flat, imgSlider, imgSliderGray, memory, phone1, phone15, phone17, phone2, phone3, phone3Back, phone3Front, phone4Back, phone4Front, resistance, slide1, slide10, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, test2 } from "./assets/index"
import { featContent, phoneFeatures } from './util/content'

function App() {
  const productRef = useRef<HTMLImageElement>(null)
  const heroImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const memoryImg = document.querySelectorAll(".memory-img")
    const handleScroll = (e: any) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement
      const position = Math.ceil(
          (scrollTop / (scrollHeight - clientHeight)) * 100
      )
      if(position < 30) {
        productRef.current!.style.transform = `translateY(${-(position * 30)}px) scale(${position * 0.4})`
      }
      if(position >= 60) {
        memoryImg.forEach(el => {
          // @ts-ignore
          el.style.transform = `translateY(${-((position - 60) * el.attributes["data-y"]!.value)}px)`

        })
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
      <div className="min-h-screen"></div>
      <div className='min-h-[300vh] relative'>
        <div className="min-h-screen flex justify-start items-center sticky top-0">
          <div className='w-[33.33%] relative'>
            <div className='text-center text-white absolute inset-0 grid place-items-center bg-black/70'>
              <div className='px-4'>
                <h2 className="text-6xl mb-4 font-bold">CPU</h2>
                <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, unde?</p>
              </div>
            </div>
            <img src={cpu2} className='w-full min-h-screen object-cover aspect-square' />
          </div>
        </div>
        <div className="min-h-screen flex justify-center items-center sticky top-0">
          <div className='w-[33.33%] relative'>
            <div className='text-center text-white absolute inset-0 grid place-items-center bg-black/70'>
              <div className='px-4'>
                <h2 className="text-6xl mb-4 font-bold">RAM</h2>
                <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, unde?</p>
              </div>
            </div>
            <img src={memory} className='w-full min-h-screen object-cover aspect-square' />
          </div>
        </div>
        <div className="min-h-screen flex justify-end items-center sticky top-0">
          <div className='w-[33.33%] relative'>
            <div className='text-center text-white absolute inset-0 grid place-items-center bg-black/70'>
              <div className='px-4'>
                <h2 className="text-6xl mb-4 font-bold">Resistance</h2>
                <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, unde?</p>
              </div>
            </div>
            <img src={resistance} className='w-full min-h-screen object-cover aspect-square' />
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
                    <p className="text-sm mb-2">Variants:</p>
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
            <p className="text-6xl text-center font-bold leading-snug py-[200px]">Make memories...</p>
            {/* put a bunch of little images */}
            <div className="flex justify-end items-baseline py-4">
              <img src={slide1} data-y="41" className="memory-img max-w-[500px]" />
            </div>
            <div className="flex justify-between items-baseline py-4">
              <img src={slide2} data-y="26" className="memory-img max-w-[400px]" />
              <img src={slide3} data-y="43" className="memory-img max-w-[300px] translate-y-[50%]" />
            </div>
            <div className="flex justify-end items-baseline py-4">
              <img src={slide4} data-y="31" className="memory-img max-w-[320px] translate-y-[50%]" />
            </div>
            <div className="flex justify-start items-baseline py-4">
              <img src={slide5} data-y="35" className="memory-img max-w-[400px]" />
            </div>
            <div className="flex justify-end gap-4 items-baseline py-4">
              <img src={slide6} data-y="35" className="memory-img max-w-[500px]" />
            </div>
            <div className="flex justify-between gap-4 items-baseline py-4">
              <img src={slide7} data-y="30" className="memory-img max-w-[500px] translate-y-[10%]" />
            </div>
            <div className="flex justify-between gap-4 items-baseline py-4">
              <img src={slide8} data-y="24" className="memory-img max-w-[300px] translate-y-[40%]" />
              <img src={slide9} data-y="33" className="memory-img max-w-[350px] translate-y-[10%]" />
            </div>
            <div className="flex justify-center gap-4 items-baseline py-24">
              <img src={slide10} data-y="12" className="memory-img max-w-[600px]" />
            </div>
            {/* {
              [slide1,slide1,slide1,slide1,slide1].map((el, i) => (
                <div className="w-full max-w-[1000px] h-[419px] aspect-square" key={i}>
                  <video autoPlay muted loop className='w-full h-full' src={el}></video>
                </div>
              ))
            } */}
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen grid place-items-center">
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
      </div> */}
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold">Featured Product</h2>
        <div className="flex items-center gap-10">
          <div className='flex flex-1 flex-col gap-5'>
            <h3 className="text-5xl font-bold mb-4">Quantum X1</h3>
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
            <h4 className="text-3xl font-bold mt-12">Price: $999</h4>
          </div>
          <img src={phone17} className='flex-1 h-[450px] object-cover'/>
        </div>
      </div>
      <div className="min-h-screen"></div>
      <div className='min-h-screen bg-[#070707] text-white relative'>
        <div className="top-gradient"></div>
        <div className='max-w-[1440px] px-4 py-56 mx-auto'>
        <h4 className="text-7xl font-bold mb-6">Heading.<br /> Lorem ipsum dolor sit.</h4>
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
        <div className="bottom-gradient"></div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold text-center">Something text here...</h2>
      </div>
    </div>
  )
}

export default App

import { useEffect, useRef } from 'react'
import { close1, close2, close3, close4, close5, close6, close7, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, img6, phone15, side, test2 } from "./assets/index"
import './App.css'

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
        <h1 className="text-7xl font-bold">This is a heading</h1>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <img ref={productRef} className="w-[300px] transition-all duration-100" src={test2}/>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold">Something text here...</h2>
      </div>
      <div className="min-h-screen"></div>
      <div className="px-4">
        <div className="min-h-screen sticky top-[150px]">
          <img src={phone15} className="w-full max-w-[600px] ml-24" />
        </div>
        <div className='min-h-screen flex justify-end'>
          <p className="text-5xl font-bold leading-snug w-1/2">Lorem ipsum dolor sit</p>
        </div>
        <div className='min-h-screen flex justify-end'>
          <p className="text-5xl font-bold leading-snug w-1/2">Lorem ipsum dolor sit</p>
        </div>
        <div className='min-h-screen flex justify-end'>
          <p className="text-5xl font-bold leading-snug w-1/2">Lorem ipsum dolor sit</p>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="min-h-screen">
          <div className="w-[500px] h-[50px] bg-red-300 sticky top-[80vh]"></div>
          <div className="min-h-screen"></div>
          <p className="text-5xl font-bold leading-snug py-30">Lorem ipsum dolor sit</p>
          <div className="min-h-screen"></div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold">Something text here...</h2>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="w-[250px] h-[350px] bg-red-300 mb-4"></div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-7xl font-bold">Something text here...</h2>
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
          <img src={img6} className='flex-1 h-[450px] object-cover'/>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div>
          <h4 className="text-5xl font-bold mb-4">Heading.<br /> Lorem ipsum dolor sit.</h4>
          <div className="flex flex-col justify-center gap-5">
            <img src={close1} className='w-full h-[600px] object-cover'/>
            <div className="flex gap-5">
              <img src={close6} className='flex-1/2 h-[400px] object-cover'/>
              <img src={close7} className='flex-1/2 h-[400px] object-cover'/>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="flex gap-5">
          <div>
            <div className="w-[250px] h-[350px] bg-red-300 mb-4"></div>
            <h4>Product name</h4>
            <p>test</p>
            <p>test</p>
            <div className="flex gap-5">
              <button>Buy</button>
              <button>Add to Cart</button>
            </div>
          </div>
          <div>
            <div className="w-[250px] h-[350px] bg-red-300 mb-4"></div>
            <h4>Product name</h4>
            <p>test</p>
            <p>test</p>
            <div className="flex gap-5">
              <button>Buy</button>
              <button>Add to Cart</button>
            </div>
          </div>
          <div>
            <div className="w-[250px] h-[350px] bg-red-300 mb-4"></div>
            <h4>Product name</h4>
            <p>test</p>
            <p>test</p>
            <div className="flex gap-5">
              <button>Buy</button>
              <button>Add to Cart</button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App

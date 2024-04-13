import { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const productRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = (e: any) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement
      const position = Math.ceil(
          (scrollTop / (scrollHeight - clientHeight)) * 100
      )
      if(position < 30) {
        // adjust the value here
        productRef.current!.style.transform = `scale(${position})`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold">This is a heading</h1>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div ref={productRef} className="w-[50px] h-[50px] bg-red-300 transition-all duration-75"></div>
      </div>
      <div className="min-h-screen"></div>
      <div className="px-4">
        <div className="min-h-screen sticky top-[150px]">
          <div className="w-[500px] h-[300px] ml-24 bg-red-300"></div>
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
        <div className="mr-auto w-[500px] h-[50px] bg-red-300"></div>
        <p className="text-5xl font-bold leading-snug py-30">Lorem ipsum dolor sit</p>
        <div className="ml-auto w-[500px] h-[50px] bg-red-300"></div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="flex gap-10">
          <div className='flex flex-col gap-5'>
            <div className="flex gap-5">
              <div className="w-[100px] h-[100px] bg-red-300"></div>
              <div className="w-[100px] h-[100px] bg-red-300"></div>
              <div className="w-[100px] h-[100px] bg-red-300"></div>
            </div>
            <div className="flex gap-5">
              <div className="w-[100px] h-[100px] bg-red-300"></div>
              <div className="w-[100px] h-[100px] bg-red-300"></div>
              <div className="w-[100px] h-[100px] bg-red-300"></div>
            </div>
            <div className="flex gap-5">
              <div className="w-[100px] h-[100px] bg-red-300"></div>
              <div className="w-[100px] h-[100px] bg-red-300"></div>
              <div className="w-[100px] h-[100px] bg-red-300"></div>
            </div>
          </div>
          <div className="w-[350px] h-[450px] bg-red-300"></div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div>
          <h4 className="text-5xl font-bold mb-4">Heading.<br /> Lorem ipsum dolor sit.</h4>
            <div className="flex flex-col justify-stretch gap-5">
              <div className="w-full h-[500px] bg-red-300"></div>
              <div className="flex gap-5">
                <div className="w-[600px] h-[400px] bg-red-300"></div>
                <div className="w-[600px] h-[400px] bg-red-300"></div>
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

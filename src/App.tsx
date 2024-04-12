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
      <Navbar />
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
        <div className="flex gap-5">
          <div className="w-[50px] h-[50px] bg-red-300"></div>
          <div className="w-[50px] h-[50px] bg-red-300"></div>
          <div className="w-[50px] h-[50px] bg-red-300"></div>
        </div>
      </div>
      <div className="bg-black text-white pb-32 pt-10 px-4">
        <div className='max-w-[1440px] mx-auto flex justify-between'>
          <ul>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
          <ul>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
          <ul>
            <li>List</li>
            <li>List</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

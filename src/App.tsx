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
      // adjust the value here
      productRef.current!.style.transform = `scale(${position / 2.5})`
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
        <div ref={productRef} className="w-[50px] h-[50px] bg-red-300 transition-500"></div>
      </div>
      <div className="min-h-screen grid place-items-center">
        <div className="flex gap-4 px-4">
          <p className="text-3xl flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut cupiditate ratione voluptatem, quisquam libero recusandae consectetur earum neque dolores!</p>
          <div className="flex-1">
            <div className="w-[300px] h-[300px] mx-auto bg-red-300"></div>
          </div>
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

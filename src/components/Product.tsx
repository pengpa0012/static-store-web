import { useRef } from "react"

function Product({src, srcHover}: {src: string, srcHover: string}) {
  const imgRef = useRef<HTMLImageElement>(null)

  return (
    <div className='text-center'>
      <img ref={imgRef} src={src} className="w-[250px] h-[400px] object-contain mb-4" onMouseOver={() => imgRef.current!.src = srcHover} onMouseOut={() => imgRef.current!.src = src} />
      <h4 className='font-bold text-2xl'>Product name</h4>
      <p>Awesome</p>
      <div className="flex justify-center gap-4 py-4">
        <div className="w-[20px] h-[20px] bg-red-500 rounded-full"></div>
        <div className="w-[20px] h-[20px] bg-gray-500 rounded-full"></div>
        <div className="w-[20px] h-[20px] bg-blue-500 rounded-full"></div>
      </div>
      <p>₱56,990</p>
      <div className="flex justify-center gap-4 mt-4">
        <button className='bg-blue-600 text-xs text-white rounded-full py-2 px-4'>Buy Now</button>
        <button className='text-gray-600 text-xs'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
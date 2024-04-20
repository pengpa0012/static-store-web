import { useRef } from "react"
import { ProductData } from "../util/types"

function Product({data, onAddToCart}: {data: ProductData, onAddToCart: (data: any) => void}) {
  const imgRef = useRef<HTMLImageElement>(null)

  return (
    <div className='text-center'>
      <img ref={imgRef} src={data.front} className="w-[250px] h-[400px] object-contain mb-4" onMouseOver={() => imgRef.current!.src = data.back} onMouseOut={() => imgRef.current!.src = data.front} />
      <h4 className='font-bold text-2xl'>Product name</h4>
      <p>{data.name}</p>
      <div className="flex justify-center gap-4 py-4">
        <div className="w-[20px] h-[20px] bg-red-500 rounded-full"></div>
        <div className="w-[20px] h-[20px] bg-gray-500 rounded-full"></div>
        <div className="w-[20px] h-[20px] bg-blue-500 rounded-full"></div>
      </div>
      <p>₱{data.price}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button className='bg-blue-600 text-xs text-white rounded-full py-2 px-4'>Buy Now</button>
        <button className='text-gray-600 text-xs' onClick={() => onAddToCart(data)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
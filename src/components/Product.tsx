function Product({src}: {src: string}) {
  return (
    <div className='text-center'>
      <img src={src} className="w-[250px] object-cover mb-4" />
      <h4 className='font-bold text-2xl'>Product name</h4>
      <p>Awesome</p>
      <p>₱56,990</p>
      <div className="flex justify-center gap-4 mt-4">
        <button className='bg-blue-600 text-xs text-white rounded-full py-2 px-4'>Buy Now</button>
        <button className='text-gray-600 text-xs'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
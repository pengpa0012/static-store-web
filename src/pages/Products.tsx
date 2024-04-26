import Product from "../components/Product"
import { productContent } from "../util/content"
import { ProductData } from "../util/types"

function Products() {

  function onAddToCart(data: ProductData) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as ProductData[]
    if(cart.length > 0 && cart.find(el => el.id == data.id)) {
      const findIndex = cart.findIndex(el => el.id == data.id)
      const newCart = [...cart]
      newCart[findIndex].quantity! += 1
      localStorage.setItem("cart", JSON.stringify(newCart))
      alert("Update Cart!")
      return
    }
    const newCart = cart.length > 0 ? [...cart, {...data, quantity: 1}] : [{...data, quantity: 1}]
    localStorage.setItem("cart", JSON.stringify(newCart))
    alert("Added to Cart!")
  }

  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <div className="max-w-6xl text-center">
          <h1 className="text-7xl font-bold">This is a Products</h1>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio culpa, aliquam voluptate ducimus corrupti tenetur unde doloribus earum harum eos.</p>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 flex relative">
          <img src={productContent[0].front} className="flex-1 max-w-[300px] z-[2]" />
          <img src={productContent[0].back} className="flex-1 max-w-[300px] absolute top-0 left-[12%]" />
          <div className="flex-1 flex justify-center">
            <div>
              <h4 className="text-5xl mb-4 font-bold">Product Name</h4>
              <ul className="mb-4">
                <li>List 1</li>
                <li>List 1</li>
                <li>List 1</li>
                <li>List 1</li>
              </ul>
              <ul>
                <li>List 1</li>
                <li>List 1</li>
                <li>List 1</li>
                <li>List 1</li>
              </ul>
              <div className="flex gap-4 py-4">
                <div className="w-[20px] h-[20px] bg-red-500 rounded-full"></div>
                <div className="w-[20px] h-[20px] bg-gray-500 rounded-full"></div>
                <div className="w-[20px] h-[20px] bg-blue-500 rounded-full"></div>
              </div>
              <p>₱{productContent[0].price}</p>
              <div className="flex gap-4 mt-4">
                <button className='bg-blue-600 text-xs text-white rounded-full py-2 px-4'>Buy Now</button>
                <button className='text-gray-600 text-xs' onClick={() => onAddToCart(productContent[0])}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
        <div className="flex flex-wrap justify-center gap-5 px-5 pt-24 pb-48">
          {
            productContent.map(el => (
              <Product data={el} key={el.id} onAddToCart={onAddToCart} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
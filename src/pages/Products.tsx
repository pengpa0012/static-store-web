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
        <h1 className="text-7xl font-bold">This is a Products</h1>
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
import { phone16 } from "../assets"
import Product from "../components/Product"

function Products() {
  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <h1 className="text-7xl font-bold">This is a Products</h1>
      </div>
      <div className="min-h-screen">
        <h2 className="text-7xl font-bold text-center py-24">Something text here...</h2>
        <div className="flex flex-wrap justify-center gap-5 px-5 pt-24 pb-48">
          {
            [1,2,3,4].map(el => (
              <Product src={phone16} key={el} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
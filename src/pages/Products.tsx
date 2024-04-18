import { phone16 } from "../assets"
import Product from "../components/Product"

function Products() {
  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <h1 className="text-7xl font-bold">This is a Products</h1>
      </div>
      <div className="min-h-screen">
        <div className="flex flex-wrap justify-center gap-5 px-5 py-24">
          {
            [1,2,3,4,5,6,7,8,9,0].map(el => (
              <Product src={phone16} key={el} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
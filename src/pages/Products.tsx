import { phone16, phone1Front, phone2Front, phone3Front, phone4Front } from "../assets"
import Product from "../components/Product"
import { productContent } from "../util/content"

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
            productContent.map((el, i) => (
              <Product src={el.front} srcHover={el.back} key={i} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
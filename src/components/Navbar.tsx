import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="bg-black/90 sticky top-0 h-[50px] -mb-[50px] z-20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between text-white py-3 px-4 h-full">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <ul className="flex gap-10">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
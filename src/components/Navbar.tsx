import { Link } from "react-router-dom"

function Navbar() {
  function scrollTop() {
    window.scrollTo({top: 0})
  }
  return (
    <div className="bg-black/90 sticky top-0 h-[50px] -mb-[50px] z-20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between text-white py-3 px-4 h-full">
        <h1 onClick={scrollTop}>
          <Link to="/">Logo</Link>
        </h1>
        <ul className="flex gap-10">
          <li onClick={scrollTop}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={scrollTop}>
            <Link to="/products">Products</Link>
          </li>
          <li onClick={scrollTop} className="relative">
            <Link to="/cart">Cart</Link>
            {
              JSON.parse(localStorage.getItem("cart") || "[]").length > 0 && 
              <div className="cart-counter">{JSON.parse(localStorage.getItem("cart") || "[]").length}</div>
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

// Update style

export default Navbar
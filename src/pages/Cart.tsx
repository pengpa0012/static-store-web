import { useState } from "react"
import { ProductData } from "../util/types"

function Cart() {
  const [cartList, setCartList] = useState<ProductData[]>(JSON.parse(localStorage.getItem("cart") || "[]"))

  function onRemoveCart(id: number) {
    const findItem = cartList.find(el => el.id == id)
    const newCart = [...cartList]
    setCartList(newCart.filter(el => el.id !== findItem!.id))
    localStorage.setItem("cart", JSON.stringify(newCart.filter(el => el.id !== findItem!.id)))
    alert("Removed to Cart!")
  }

  function updateQuantity(id: number, isAdd: boolean) {
    const findIndex = cartList.findIndex(el => el.id == id)
    const newCart = [...cartList]
    if(!isAdd && newCart[findIndex].quantity! <= 1) return
    newCart[findIndex].quantity! += isAdd ? 1 : -1 
    setCartList(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  return (
   <div className="min-h-screen pt-24 max-w-[1440px] mx-auto px-4">
    <h2 className="text-5xl font-bold text-center mb-12">Cart</h2>
    <table className="w-full text-left">
      <thead>
        <tr className="border border-r-0 border-l-0 border-t-0">
          <th className="pb-4">Product</th>
          <th className="pb-4">Price</th>
          <th className="pb-4">Quantity</th>
          <th className="pb-4">Total</th>
          <th className="pb-4">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {
          cartList.map(el => (
            <tr key={el.id}>
              <td className="flex gap-2 py-4">
                <img src={el.front} className="w-[100px] h-[100px] object-contain" />
                {/* <div className="bg-gray-200 w-[100px] h-[100px]"></div> */}
                <div className="flex flex-col gap-2">
                  <p>{el.name}</p>
                  <h3 className="text-2xl">{el.description}</h3>
                </div>
              </td>
              <td className="text-lg">${el.price}</td>
              <td>
                <div className="flex gap-2">
                  <p>{el.quantity}</p>
                  <div className="flex">
                    <button className="border w-[25px] h-[25px] grid place-items-center rounded-tl-md rounded-bl-md" onClick={() => updateQuantity(el.id, false)}>-</button>
                    <button className="border w-[25px] h-[25px] grid place-items-center rounded-tr-md rounded-br-md" onClick={() => updateQuantity(el.id, true)}>+</button>
                  </div>
                </div>
              </td>
              <td className="text-lg">${el.price * el.quantity!}.00 USD</td>
              <td className="text-lg"><button className="text-red-500" onClick={() => onRemoveCart(el.id)}>Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className="flex justify-between py-4 border border-r-0 border-l-0 border-b-0">
      <div className="flex flex-1 flex-col gap-2">
        <p>Notes:</p>
        <textarea placeholder="Type here..." className="border p-2 min-h-[50px] max-h-[200px] focus:outline-none"></textarea>
      </div>
      <div className="flex-1 flex flex-col items-end">
        <p className="text-xl mb-4">Total: ${cartList.reduce((acc, curr) => acc += (curr.price * curr.quantity!), 0)}.00 USD</p>
        <button className="py-2 px-4 bg-blue-500 rounded-md text-white">Checkout</button>
      </div>
    </div>
   </div>
  )
}

// add logic here
// get data on local storage

export default Cart

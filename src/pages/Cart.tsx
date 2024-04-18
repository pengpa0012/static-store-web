
function Cart() {
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
        </tr>
      </thead>
      <tbody className="divide-y">
        {
          [1,2,3,4,5].map(el => (
            <tr key={el}>
              <td className="flex gap-2 py-4">
                <div className="bg-gray-200 w-[100px] h-[100px]"></div>
                <div className="flex flex-col gap-2">
                  <p>Lorem</p>
                  <h3 className="text-2xl">Lorem ipsum dolor sit amet.</h3>
                  <p>Lorem</p>
                </div>
              </td>
              <td className="text-lg">$10.00 USD</td>
              <td>
                <div className="flex gap-2">
                  <p>3</p>
                  <div className="flex">
                    <button className="border w-[25px] h-[25px] grid place-items-center rounded-tl-md rounded-bl-md">-</button>
                    <button className="border w-[25px] h-[25px] grid place-items-center rounded-tr-md rounded-br-md">+</button>
                  </div>
                </div>
              </td>
              <td className="text-lg">$10.00 USD</td>
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
        <p className="text-xl mb-4">Total: $$$$</p>
        <button className="py-2 px-4 bg-blue-500 rounded-md text-white">Checkout</button>
      </div>
    </div>
   </div>
  )
}

// add logic here
// get data on local storage

export default Cart

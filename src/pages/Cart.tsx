
function Cart() {
  return (
   <div className="min-h-screen pt-24 max-w-[1440px] mx-auto">
    <div className="flex gap-5">
      <div className="flex-1">
        {
          [1,2,3,4,5].map((el) => (
            <div className="flex gap-5" key={el}>
              <div className="w-[100px] h-[100px] bg-red-300 mb-4"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          ))
        }
      </div>
      
      <div className="flex-1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi.</p>
      </div>
    </div>
   </div>
  )
}

export default Cart

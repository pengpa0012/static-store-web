
function Products() {
  return (
    <>
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold">This is a Products</h1>
      </div>
      <div className="min-h-screen">
        <div className="flex flex-wrap justify-center gap-5 px-5 py-24">
          {
            [1,2,3,4,5,6,7,8,9,0].map(el => (
              <div className="w-[300px] h-[400px] bg-red-200" key={el}></div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
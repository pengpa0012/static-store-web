import Navbar from "../components/Navbar";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold">This is a cart</h1>
      </div>
    </>
  )
}

export default Cart
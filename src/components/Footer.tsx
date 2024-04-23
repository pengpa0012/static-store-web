
function Footer() {
  return (
    <div className="bg-black pb-32 pt-10 px-4">
      <div className='max-w-[1440px] mx-auto flex justify-between text-gray-300'>
        <ul>
          <li className="font-bold mb-1 text-lg text-white">Smartphones</li>
          <li>Phone 1</li>
          <li>Phone 2</li>
          <li>Phone 3</li>
          <li>Phone 4</li>
        </ul>
        <ul>
          <li className="font-bold mb-1 text-lg text-white">Tablet</li>
          <li>Tablet 1</li>
          <li>Tablet 2</li>
          <li>Tablet 3</li>
          <li>Tablet 4</li>
        </ul>
        <ul>
          <li className="font-bold mb-1 text-lg text-white">Laptop</li>
          <li>Laptop 1</li>
          <li>Laptop 2</li>
          <li>Laptop 3</li>
          <li>Laptop 4</li>
        </ul>
        <ul>
          <li className="font-bold mb-1 text-lg text-white">Contact Us</li>
          <li>
            <ul className="flex gap-2">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

function Footer() {
  return (
    <div className="bg-black text-white pb-32 pt-10 px-4">
      <div className='max-w-[1440px] mx-auto flex justify-between'>
        <ul>
          <li className="font-bold mb-1 text-lg">Smartphones</li>
          <li>Phone 1</li>
          <li>Phone 2</li>
          <li>Phone 3</li>
          <li>Phone 4</li>
        </ul>
        <ul>
          <li className="font-bold mb-1 text-lg">Tablet</li>
          <li>Tablet 1</li>
          <li>Tablet 2</li>
          <li>Tablet 3</li>
          <li>Tablet 4</li>
        </ul>
        <ul>
          <li className="font-bold mb-1 text-lg">Laptop</li>
          <li>Laptop 1</li>
          <li>Laptop 2</li>
          <li>Laptop 3</li>
          <li>Laptop 4</li>
        </ul>
        <ul>
          <li className="font-bold mb-1 text-lg">Contact Us</li>
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
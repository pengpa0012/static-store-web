
function About() {
  return (
    <>
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold">This is a About</h1>
      </div>
      <div className="min-h-screen">
        <div className="min-h-screen grid place-items-center">
          <div className="flex gap-5 px-4">
            <p className="text-4xl flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium accusantium nemo sapiente possimus consequuntur blanditiis culpa ipsam voluptatem consectetur et eveniet dolorem dolorum, a nulla? Nostrum impedit natus ducimus.</p>
            <div className="w-[250px] h-[350px] bg-red-300 flex-1"></div>
          </div>
        </div>
        <div className="min-h-screen grid place-items-center">
          <div className="flex gap-5 px-4">
            <div className="w-[250px] h-[350px] bg-red-300 flex-1"></div>
            <p className="text-4xl flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium accusantium nemo sapiente possimus consequuntur blanditiis culpa ipsam voluptatem consectetur et eveniet dolorem dolorum, a nulla? Nostrum impedit natus ducimus.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
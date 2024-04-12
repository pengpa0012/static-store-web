import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-red-200 grid place-items-center">
        <h1 className="text-7xl font-bold">This is a about</h1>
      </div>
      <div className="min-h-screen"></div>
    </>
  )
}

export default About
import { useState } from "react"

function App() {
  const [activeStates, setActiveStates] = useState([false, false, false]);

  const handleMouseEnter = (index: number) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = true;
    setActiveStates(newActiveStates);
  };

  const handleMouseLeave = (index: number) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = false;
    setActiveStates(newActiveStates);
  };
  return (

    <>
    <div className=' text-white bg-[#000235] min-h-screen'>
      <div className=" flex flex-row gap-x-56 mx-auto  items-start py-6 px-3 text-white justify-center ">
        <div className=" uppercase  pt-2">
          <a className=" text-white text-lg font-extrabold">Mpay.</a>
        </div>
        <div className=" flex flex-row gap-x-10 justify-center items-center group">
          <div >
            <a  className={`uppercase text-white text-lg font-extrabold cursor-pointer   ${
            activeStates[0] ? 'border-b-2 border-[#ffff] transition duration-500 ease-in-out' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}>Home</a>
          </div>
          <div >
            <a  className={`uppercase text-white text-lg font-extrabold cursor-pointer ${
            activeStates[1] ? 'border-b-2 border-[#ffff] transition duration-500 ease-in-out' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}>About</a>
          </div>
          <div >
            <a  className={`uppercase text-white text-lg font-extrabold cursor-pointer ${
            activeStates[2] ? 'border-b-2 border-[#ffff] transition duration-500 ease-in-out' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}>Contact</a>
          </div>
          <div >
            <a  className={`uppercase text-white text-lg font-extrabold cursor-pointer ${
            activeStates[3] ? 'border-b-2 border-[#ffff] transition duration-500 ease-in-out' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}>Pricing</a>
          </div>
          <div className=" uppercase ">
        <button className=" bg-[#9091DC] text-white text-lg rounded-full py-2 px-7 uppercase  transition duration-500 ease-in-out hover:bg-transparent hover:text-white hover:ring-2 hover:ring-[#9091DC]">pay
  
        </button>
        </div>
          </div>
      </div>

      {/* hero */}
      <div className=" flex  flex-row gap-x-1 gap-y-5 px-3 items-center justify-center mx-auto">
       <div className=" w-[30%] text-5xl flex  flex-col font-extrabold leading-tight">
        <span>Discover A
</span>
<span>Seamless </span>
<span>Payment.</span>

<div className=" text-sm text-white font-medium">
  <p>
  The most secure payment gateways in the world.
  </p>
</div>

<div className=" flex flex-row gap-x-5 pt-5">

  <div className=" bg-[#8D8DDA] text-white text-lg rounded-full py-2 px-5 uppercase   transition duration-500 ease-in-out hover:bg-transparent hover:text-white hover:ring-2 hover:ring-[#9091DC]">
    <button className=" px-6 py-1  uppercase">pay</button>
    </div>
    <div className=" border-[#9091DC] border text-white text-lg rounded-full py-2 px-5 uppercase transition duration-500 ease-in-out hover:bg-[#9091DC] hover:text-white hover:ring-2 hover:ring-[#9091DC]">
    <button className=" px-6 py-1  uppercase ">learn</button>
    </div>
</div>
       </div>
        <div className=" w-[30%]">
          <img src="../src/assets/hero1.png" alt="" className=" w-full" />
          </div>
    
        </div>

        <div className=" flex flex-col gap-y-5 px-3 items-center justify-center mx-auto">
          <h3 className=" text-3xl font-extrabold leading-tight text-start" >Featured on</h3>
          <div className=" flex flex-row gap-x-5 bg-[#13124F] justify-center ic mx-auto py-3 opacity-80 rounded-md">
            <div className=" w-[10%]">
              <img src="../src/assets/logo1.png" alt="" className=" w-full" />
            </div>
            <div className=" w-[10%]">
              <img src="../src/assets/logo2.png" alt="" className=" w-full" />
            </div>
            <div className=" w-[10%]">
              <img src="../src/assets/logo3.png" alt="" className=" w-full" />
            </div>
            <div className=" w-[10%]">
              <img src="../src/assets/logo4.png" alt="" className=" w-full" />
            </div>
          
              </div>
              </div>
    
              <div className=" flex  flex-row-reverse gap-x-9 gap-y-7  px-3 items-center justify-center mx-auto ">
       <div className=" w-[40%] text-4xl flex  flex-col font-extrabold leading-tight  gap-y-2">
        <h4 className=" text-sm font-medium leading-tight text-start uppercase" >Analytics </h4>
<span>Built-In Analytics </span>
<span>To Track Your Pay.</span>


<div className=" text-xs w-[50%] text-white font-medium">
  <p>
  Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.
  </p>
</div>
<div className=" flex flex-row gap-x-5 pt-5 justify-self-start w-full justify-start items-center">
    <div className=" border-[#9091DC]  justify-self-center  w-[50%] justify-start items-center text-center border text-white text-lg rounded-full py-2 px-5 uppercase transition duration-500 ease-in-out hover:bg-[#9091DC] hover:text-white hover:ring-2 hover:ring-[#9091DC]">
    <button className=" px-6 py-1 text-center  uppercase ">pricing</button>
    </div>
</div>
       </div>
        <div className=" w-[30%]">
          <img src="../src/assets/hero2.png" alt="" className=" w-full" />
          </div>
    
        </div>

        {/* hero3 */}
        <div className=" flex  flex-row gap-y-7  px-3 items-center justify-center mx-auto  gap-x-0">
       <div className=" w-[30%] text-4xl flex  flex-col font-extrabold leading-tight  gap-y-2">
        <h4 className=" text-sm font-medium leading-tight text-start uppercase" >Get our App </h4>
<span>Pay Instantly at a </span>
<span>click of a Button.</span>


<div className=" text-xs w-[50%] text-white font-medium">
  <p>
  Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.
  </p>
</div>
<div className=" flex flex-row gap-x-2 pt-5 justify-self-start w-full justify-start items-center">
    <div className=" border-[#9091DC]  justify-self-center  w-[50%] justify-start items-center text-center border text-white text-lg rounded-full py-2 px-5 uppercase transition duration-500 ease-in-out hover:bg-[#9091DC] hover:text-white hover:ring-2 hover:ring-[#9091DC]">
    <button className=" px-6 py-1 text-center uppercase"> Download</button>
    </div>
</div>
       </div>
        <div className=" w-[30%]">
          <img src="../src/assets/hero3.png" alt="" className=" w-full" />
          </div>
    
        </div>
    </div>
    </>
  )
}

export default App

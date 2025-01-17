import React from 'react'
const SideBar = ({details,setShowSidebar,showSidebar}) => {
    console.log(details)
  return (
    <div className='xl:w-[20vw] bg-[#FFAE27] min-h-screen border flex flex-col items-center'>
        <div className='text-3xl font-logo text-center pt-8 pb-14 relative w-full '>
            Stayhub
            
        </div>
        {
            details.map((item,index)=>(
                <div className='text-lg border cursor-pointer h-16 w-full flex items-center justify-center font-bold text-white hover:bg-[#FF840C] transition-all ease-linear duration-300' key={index} onClick={item.set}>
                    {item.name}
                </div>
            ))
        }
    </div>
  )
}

export default SideBar
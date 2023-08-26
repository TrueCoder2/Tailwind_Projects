import React from 'react';
import {useState} from "react";
import Logo from "../Assets/Logo.png"


const Layout = ({children}) => {
  const [open , setOpen] = useState(true);

  const sideBar = [
    {
      label:"home",
      icon:"home"
    },

    {
      label:"shorts",
      icon:"app_shortcut"
    },

    {
      label:"subscription",
      icon:"subscriptions"
    },
  ]

  const sideBartwo = [
    {
      label:"library",
      icon:"video_library"
    },

    {
      label:"history",
      icon:"history"
    },

    {
      label:"your videos",
      icon:"smart_display"
    },

    {
      label:"watch later",
      icon:"schedule"
    },

    {
      label:"liked videos",
      icon:"thumb_up"
    },

    {
      label:"liked videos",
      icon:"thumb_up"
    },
  ]

    return(
      <>
        <div> 
         <nav className="bg-[#0f0f0f]  fixed top-0 left-0 w-full h-16 z-10 flex items-center justify-between bg-[#0f0f0f] ">
          <div className='flex items-center gap-x-1'>
          <button onClick={() => setOpen(!open)} className="hover:bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center ml-2" style={{Color:"white"}}>
          <span className="material-icons-outlined" style={{color:"white"}}>
            menu
          </span> </button>
          <img src={Logo} alt='logo' className=' w-[100px] cursor-pointer '/>
          </div>

          <div className='flex-col w-[600px] flex'>
         <form className='flex ' >
          <input className='border border-slate-700 h-10 rounded-l-full flex-1 bg-[#121212] pl-4' placeholder='Search'  />
          <button  className="border border-slate-700 border-l-0 rounded-r-full h-10 flex items-center justify-center w-14 bg-[#222222] ">
          <span className="material-icons-outlined flex items-center justify-center text-slate-200" style={{wght:"100",color:"white"}} >
            search
          </span> </button>
          <button  className="hover:bg-gray-500 w-10 h-10 bg-[#272727] ml-3 rounded-full flex justify-center items-center ">
          <span class="material-icons-outlined" style={{color:"white"}}>
            mic
          </span> </button>
         </form>
          </div>

          <div className='flex items-center gap-x-1'>
          <button  className="hover:bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center">
          <span class="material-icons-outlined" style={{color:"white"}}>
            emergency_recording
          </span> </button>

          <button  className="hover:bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center">
          <span class="material-icons-outlined" style={{color:"white"}}>
            notifications
          </span> </button>

          <img src='https://yt3.ggpht.com/yti/AOXPAcWoTuJLuf4Vbl67FgSPjpNRo9J-0kO7kBNXAg=s88-c-k-c0x00ffffff-no-rj' alt='logo' className=' w-[35px] rounded-full mr-4 cursor-pointer'/>
          </div>
         </nav>  


         <aside className="bg-[#0f0f0f] overflow-auto h-full fixed top-0 left-0 mt-16 flex items-center flex-col px-5 gay-y-2 py-2 " style={{width: open ? 250 : 0, transition: '0.2s', visibility: open ? 'visible' : 'hidden'}}> 
          
          {sideBar.map((item,index) => (
             <button key={index} className=' flex gap-x-4 py-2 px-4 rounded-lg hover:bg-[#272727] text-slate-100 w-[200px] ' style={{fontWeight:'400'}} >
             <span className='material-icons-outlined' > {item.icon} </span>
             <span className='capitalize' > {item.label} </span>
           </button>
          ) )}

         <div className='mt-4 border-y border-slate-400 py-5'>
         {sideBartwo.map((item,index) => (
             <button key={index} className=' flex gap-x-4 py-2 px-4 rounded-lg hover:bg-[#272727] text-slate-100 w-[200px] ' style={{fontWeight:'400'}} >
             <span className='material-icons-outlined' style={{fontWeight:'50'}} > {item.icon} </span>
             <span className='capitalize' > {item.label} </span>
           </button>
          ) )}
         </div>

         </aside> 

         <section className="mt-16 p-5 bg-slate-400" style={{marginLeft: open ? 250 : 0, transition: '0.2s'}}>
           {children}
         </section>     
        </div>
        </>
    )
}

export default Layout;
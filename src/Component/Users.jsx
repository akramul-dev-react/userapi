import React, { useEffect, useState } from 'react'

const Users = () => {
    const  [data, setdata] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setdata(json))
   
},[])

  return (
    
    <div className=' flex gap-5 flex-wrap justify-center bg-[#229799] h-full'>
        {
           data.map((item)=>{
                return(
                    <div className="singlecurd w-[340px] h-[460px] rounded-md border-2 border-[#4B70F5] bg-[rgb(16,28,62)] mt-5">
                    <div className=' w-[100px] h-[100px] rounded-full m-auto border-2 border-[#4B70F5] mt-5'>
                            <img className=' rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdq_U-3-jN1Ohsg_T562luP5MPMF8l2_eyOg&s" alt="profilrphoto" />
                        </div>
                        <div className="userdata mt-7">
                            <h2 className=' text-xl font-semibold text-white mt-7'><span className=' text-[#4B70F5] ml-3 mr-4'>Id:</span>{item.id}</h2>
                            <h2 className=' text-xl font-semibold text-white mt-7'><span className=' text-[#4B70F5] ml-3 mr-4'>Name:</span>{item.name}</h2>
                            <h2 className=' text-xl font-semibold text-white mt-7'><span className=' text-[#4B70F5] ml-3  mr-4'>email:</span>{item.email}</h2>
                            <h2 className=' text-xl font-semibold text-white mt-7'><span className=' text-[#4B70F5] ml-3  mr-4'>Phone:</span>{item.phone}</h2>
                        </div>
                    </div>

                )
               
            })
        }
      
    </div>
  )
}

export default Users
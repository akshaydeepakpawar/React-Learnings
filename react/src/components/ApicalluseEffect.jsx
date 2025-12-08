import React, { useState ,useEffect} from 'react'

const ApicalluseEffect = () => {

     const [data,setData]=useState([]);
      
      //this callback function runs only once
      useEffect(()=>{
       const fetchData =async()=>{
          const data= await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
          if(data && data.length)
            setData(data);
        }
        fetchData();
      },[])
    
  return (
     <div className=''>
      {/* fetch all data  */}

      {/* <ul>
        {data.map((user)=>{
          return <li key={user.id}>{user.name}</li>
        })}
      </ul> */}

      {/* fetch first data  */}
      <h1 className='text-3xl font-bold'>{data.length > 0 ? data[0].name : <p>loading...</p>}</h1>
    </div>
  )
}

export default ApicalluseEffect
import axios from 'axios'

import React, { useEffect, useState } from 'react'

const App = () => {
    const [user , setUser]=useState([]);
    const [name , setName]= useState('')
    const [ram , setRam]= useState('asc')
    const [munna , setMunna]= useState('')
    
    useEffect(()=>{
        const bodyFormData = new FormData();
        bodyFormData.append("page",0)
        bodyFormData.append("filter",munna)
        bodyFormData.append("type",ram)
        bodyFormData.append("user_type",'admin')
        bodyFormData.append("tags[0]",'')
        bodyFormData.append("srch_txt",name)
       

        axios.post(`https://www.eliquidremix.com/panel/api/show-recipes`,bodyFormData).then((res)=>{
            console.log(res)
            setUser(res?.data?.data)
        })
    },[name , ram , munna])
    




  return (
    <>
     <h1>{ram}</h1>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <input type="text" value={name}  onChange={(e)=>setName(e.target.value) }  />

        </div>

      </div>
    </div>
     <div>
  <div className='G'>
  <select onChange={(e)=>setRam(e.target.value)}  >
              <option value={'asc'}>Accending</option>
              <option value={'desc'} >Decending</option>
           
            </select>
      </div>       
 </div>    
 <div className='M'>
  <select onChange={(e)=>setMunna(e.target.value)}  >
              <option value={'newest'}>newest</option>
              <option value={'name'} >name</option>
              <option value={'rating'}>rating</option>
              <option value={'percentage'} >percentage</option>
              <option value={'steep'} >steep</option>
           
            </select>
      </div>       
    
    





    <div className='container'>
      <div className='row'>
        <div className='col'>
       
      

    {
    user.map((values , index)=>{
      return(
        <>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <img src={values.recipe_image} alt="..."
                />
                <div className='card-title'>
                  <div className='Munna'>
                  <h3 className='text-center'>{values.description}</h3>
                  <p>{values.recipe_name}</p>

                  </div>
                  <div className='Ram'>
                  <h3 >  {values.cart_status} review</h3>
                  <p >  {values.total_percentage} % </p>
                  

                  </div>
                  
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
        </>
      )
      
    })
   }
    </div>
    </div>

</div>   
   
    </>
    
  )
}

export default App
 import React from 'react'
 
 function Home() {
   return (
     <div className='home'>
        <h1>Welcome to AgroScan Database</h1>
        <p>Your comprehensive resource for agricultural chemicals information.</p>
        <div className='features'>
          <div className='feature'>
            <h3>Search Products</h3>
            <p>Find detailed information about fertilizers and pesticides</p>
          </div>
          <div className='feature'>
            <h3>Ingredient Analysis</h3>
            <p>Learn about chemical compositions and their effects</p>
          </div>
          <div className='feature'>
            <h3>Safety Information</h3>
            <p>Understand hazards and safety precautions</p>
          </div>
        </div>
     </div>
   )
 }
 
 export default Home
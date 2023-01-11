import React  from 'react'
import {MyConsumer} from '../MyAllContext/MyContext'
const SecondCompo = () => {
  //short cut way to know all data, 
let dat=[]
let xx = <MyConsumer >{([usage,address]) =>
  {
   dat.push(usage)
   dat.push(address)
   console.log('data received',dat);
  }
}</MyConsumer>

  return (
    <div>
        <h3>Second Compo</h3>
        {xx}
        {/* A way */}
        {/* <MyConsumer>{x=>x[0].name}</MyConsumer> */}
        {/* Another Way */}
        <MyConsumer>
        { 
          //If all values passed in a wrap of  One Array, 
          //then here we will use array destructuring, 
         //Mostly we send data in form of object , not array 
         // ({name})=>   //otherwise we will use object destructuring    
          ([usage])=>   
          {
            return(<>
            <h3>{usage.name}</h3>
            </>)
          }
        }
        </MyConsumer>
    </div>
  )
}
export default SecondCompo
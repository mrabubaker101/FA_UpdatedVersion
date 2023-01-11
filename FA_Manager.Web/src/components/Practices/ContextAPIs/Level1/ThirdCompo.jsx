import React from 'react'
import {MyConsumer} from '../MyAllContext/MyContext'

const ThirdCompo = ({...props}) => {
  console.log('Props In third',props);
  return (
    <div>
        <h3>Third Compo</h3> 
        <MyConsumer>
          {
            //this is necessory, to lace proper order, hell
            //it is necessory to destructure array 
            //with same order as it were passed from Provider value (if we want data from second array 
            //then it should taken on second order of parameter)
            ([,address])=>{
              return (<>
              <h4>{address.location}</h4>
              </>)
            }
          }
        </MyConsumer>
    </div>
  )
}

export default ThirdCompo
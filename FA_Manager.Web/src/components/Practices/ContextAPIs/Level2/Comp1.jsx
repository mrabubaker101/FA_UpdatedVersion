import React, { useContext } from 'react'
import { L2context1 } from '../MyAllContext/L2Context1'
const Comp1 = () => {
    //jsut pass context file where it is created for seperations
    const info = useContext(L2context1)
    console.log('info',info)
    return <h3>Comp#1,  User Name :{info.name}</h3>  
}
export default Comp1
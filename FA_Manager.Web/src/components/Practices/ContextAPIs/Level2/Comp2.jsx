import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { L2context2 } from '../MyAllContext/L2Context2';

const Comp2 = () => {
    const address = useContext(L2context2)
    console.log('address',address);
  return (
    <> 
        <h4>Comp#2   Address: {address.location +',  Street # '+address.street} </h4>
        <hr />
        {/* below comp3 will render when provider data changeed only,
         no dependency of comp3 anymore , (typically, when parent comp chang, child will rerender)*/}
        <Comp3 />   
    </>
  )}
export default Comp2
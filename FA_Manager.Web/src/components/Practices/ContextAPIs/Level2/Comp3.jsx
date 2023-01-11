import React, { useContext } from 'react'
import { L2Context3 } from '../MyAllContext/L2Context3';
const Comp3 = () => {
    const others = useContext(L2Context3)
    console.log('others',others);
  return <b>Comp #3{others.Skills.map(skill =><p>{skill}</p>)}</b>
}
export default Comp3
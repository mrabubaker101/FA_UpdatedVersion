import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import { L2context1 } from "../MyAllContext/L2Context1";
import { L2context2 } from '../MyAllContext/L2Context2';
import { L2Context3 } from '../MyAllContext/L2Context3';
const MainCompoEasy = () => {

  let info = {name:'Abu Baker',age:45}
  let address = {location:'Karachi',street:'3434 KArr 23'}
  let others = {occupation:'Private',Skills:['Programming','playing cricket','Hockey']}

  return (
    <div>
        <br />
        <h4>Second Way [with useContext hooks (for eliminate callback hells)]</h4> 
        <hr />        
      {/* Using N Levels , and access using useContext Hooks [best way] */}
        <L2context1.Provider value={info}>
          <L2context2.Provider value={address}>
            <L2Context3.Provider value={others}>
              <Comp1 />
              <hr />
              <Comp2 />
            </L2Context3.Provider>
          </L2context2.Provider>
        </L2context1.Provider>

    </div>
  )
}

export default MainCompoEasy
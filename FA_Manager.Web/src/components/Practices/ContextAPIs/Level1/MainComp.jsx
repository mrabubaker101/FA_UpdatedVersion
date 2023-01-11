import React  from 'react'
import SecondCompo from '../Level1/SecondCompo'
import ThirdCompo from '../Level1/ThirdCompo'
import {MyProvider} from '../MyAllContext/MyContext'

let usage= {name:'abubaker-Using Context API',age:26}
let address= {id:1,location:'Karachi'}
console.log('value sending',[usage,address])

const MainComp = () => {
  return (
    <div>MyContextAPIMain
        <h3> Hello Components</h3>
            <hr />
            {/* OLD WAY */}
            {/* <SecondCompo usage={usage} />
            <ThirdCompo  usage={usage} /> */}
        {/* New Way (Using Context API) */}
        <MyProvider value={[usage,address]}>
          <SecondCompo />
          <ThirdCompo />
        </MyProvider>
    </div>
  )
}

export default MainComp
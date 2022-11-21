import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../Redux/counter'

function UsingRedux() {
  const count = useSelector((state) => state.counter) // getter
  const dispatch = useDispatch()

  return (
    <div>
        
        counter {count.value}<br/>
        {/* NAME {name} */}
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <Child />
    </div>
  )
}


const Child = ()=>{
  const count = useSelector((state) => state.counter) // getter
  return <>counter {count.value}<br/></>
}

export default UsingRedux
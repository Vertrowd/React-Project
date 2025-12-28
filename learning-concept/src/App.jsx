import React, { useState } from 'react'
function useCounter(){
  const [count , setCount]=useState(0)

  function increasecount(){
    setCount(count+1)
  }
  return {
    count:count,
    increasecount:increasecount
  }
}
const App = () => {
  return (
    
  <><Counter /></>
  )
}

function Counter(){
  const {count, increasecount}=useCounter()
  return (<>
  <div>
  <button onClick={increasecount}>Increase {count}</button>
  </div>
  </>)
  
}

export default App
import React from 'react'
// import StateDemo from './StateDemo'
// import StateDemo2 from './StateDemo2'
// import StateDemo3 from './UseRefDemo'
// import StateDemo4 from './UseMemoDemo'
// import StateDemo5 from './UseCallbackDemo'
import useMouse from './useMouse'


function App() {

  const {x, y} = useMouse()

  return (
    <>
    <div>
      <p>App page {x} {y}</p>
      {/* <StateDemo2 /> */}
      {/* <StateDemo3 /> */}
      {/* <StateDemo4 /> */}
      {/* <StateDemo5 /> */}


    </div>
    </>
  )
}

export default App

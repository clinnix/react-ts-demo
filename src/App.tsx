import React from 'react'
// import StateDemo from './StateDemo'
// import StateDemo2 from './StateDemo2'
// import StateDemo3 from './UseRefDemo'
// import StateDemo4 from './UseMemoDemo'
// import StateDemo5 from './UseCallbackDemo'
// import useMouse from './useMouse'
// import useGetInfo from './useGetInfo'
import List from './pages/List'
import { Router } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import routerConfig from './router'
import 'antd/dist/reset.css'




function App() {

  // const {loading, info} = useGetInfo()

  // const {x, y} = useMouse()


  return <RouterProvider router={routerConfig}></RouterProvider>

    // // <div className='App'>
    //   {/* <p>App page {x} {y}</p> */}
    //   {/* <StateDemo2 /> */}
    //   {/* <StateDemo3 /> */}
    //   {/* <StateDemo4 /> */}
    //   {/* <StateDemo5 /> */}
    //   {/* <p>{loading ? '加载中...' : info}</p> */}
    //   // <h1 style={{background: 'yellow'}}>问卷 FE</h1>
    //   // <List />
    // // </div> 
    


}

export default App

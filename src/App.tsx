/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { VtbcPrice } from './VtbPrice'
import { About } from './About'
import { useContext, useEffect } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { VTBApiContext } from './VTBApiContext'

function App() {

  const {setApi} = useContext(VTBApiContext)

  useEffect(() => {
    const wsProvider = new WsProvider('wss://substratenode.vtbtestnet.com/explorer')
    ApiPromise.create({ provider: wsProvider }).then((api: ApiPromise) => {
      setApi(api)
    })
  }, [])

  return (
   <div>
    <h5 style={{position: "absolute", right: 10, top:10}}>using HashRouter</h5>
    <Routes>
      <Route path="/" element={<VtbcPrice />} />
      <Route path="/about" element={<About />} />
    </Routes>
   </div>
  )
}

export default App

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import './App.css'

import { ApiPromise, WsProvider } from '@polkadot/api'

function App() {

  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    const wsProvider = new WsProvider('wss://substratenode.vtbtestnet.com/explorer')
    ApiPromise.create({ provider: wsProvider }).then((api: any) => {
      api.query.vtbCurrency.vtbcPrice((price: any) => {
        setPrice(price.toHuman())
      })
    })
  },[])
  
  return (
    <>
      <div>
        VTBC Price : {price}
      </div>
    </>
  )
}

export default App

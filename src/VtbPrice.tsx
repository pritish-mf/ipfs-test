/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { VTBApiContext } from './VTBApiContext';
export function VtbcPrice() {
  const {api} = useContext(VTBApiContext)
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    if(api)
      api.query.vtbCurrency.vtbcPrice((price: any) => {
        setPrice(price.toHuman())
      })
  }, [api])

  return (<>
    <h1>VTB DEMO</h1>
    <div>
      VTBC Price : {price}
    </div>
    <Link to="/about">About</Link>
  </>)
}
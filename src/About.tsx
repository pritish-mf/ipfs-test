import { useContext, useEffect, useState } from "react"
import { VTBApiContext } from "./VTBApiContext"
export function About() {

  const {api} = useContext(VTBApiContext)
  const [about, setAbout] = useState("")

  useEffect(() => {

    if (api) api.isReady.then((api) => {
      Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.version()
      ]).then(([chain, version]) => {
        setAbout(`You are connected to chain ${chain} version ${version}`)
      })
    })
  }, [api])
  return (
    <div>
      <h1>About</h1>
      <p>{about}</p>
    </div>
  )
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ApiPromise } from "@polkadot/api";
import { VTBApiContext } from "./VTBApiContext";


export const VTBApiProvider = ({ children } : any) => {
  const [api, setApi] = useState<ApiPromise | null>(null);
  useEffect(() => {
    api
  }, [api]);
  return (
    <VTBApiContext.Provider value={{ api: api, setApi: setApi }}>
      {children}
    </VTBApiContext.Provider>
  );
}
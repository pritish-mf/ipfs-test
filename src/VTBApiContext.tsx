import { ApiPromise } from "@polkadot/api";
import { createContext } from "react";

interface VTBApiContextType {
  api: ApiPromise | null;
  setApi: (api: ApiPromise) => void;
}

export const VTBApiContext = createContext<VTBApiContextType>({ api: null, setApi: () => {} });
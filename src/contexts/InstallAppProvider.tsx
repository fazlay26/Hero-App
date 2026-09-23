'use client'

import { iApp } from "@/types/appTypes";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface InstallAppContextType {
  installApp: iApp[];
  setInstallApp: Dispatch<SetStateAction<iApp[]>>;
}

export const installAppContext = createContext<InstallAppContextType | undefined>(undefined);

const InstallAppProvider = ({children}: { children: ReactNode }) => {
    const [installApp,setInstallApp] = useState<iApp[]>([]);
    const data = {
        installApp,
        setInstallApp
    }

    return (
        <installAppContext.Provider value={data}>
            {children}
            
        </installAppContext.Provider>
    );
};

export default InstallAppProvider;
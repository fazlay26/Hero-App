'use client'
import { installAppContext } from '@/contexts/InstallAppProvider';
import { iApp } from '@/types/appTypes';
import React, { useContext } from 'react';
import { FiDownload } from 'react-icons/fi';
interface AppProps{
    app:iApp;
}

const InstallButton = ({app}:AppProps) => {
   const context = useContext(installAppContext);
    if (!context) {
    throw new Error("MyComponent must be used within InstallAppProvider");
  }
  const {installApp,setInstallApp} = context;
    const handleInstallButton = ()=>{
        setInstallApp([...installApp,app])
    }
    console.log(installApp)
   
    return (
        <button onClick={()=>handleInstallButton()} className="btn btn-primary gap-2 rounded-full px-6">
            <FiDownload /> Install
        </button>
    );
};

export default InstallButton;
import { use, useState } from 'react'
import { useEffect } from "react";
import Navbarmenu from './complement/Navbarmenu'
import MainPro from './complement/MainPro.jsx'
import HookMaluaText from './complement/HookMaluaText.jsx';
import CustomCursor from './complement/CustomCursor.jsx';
import Mainunalcv from './complement/Mainunalcv.jsx';
function App() {
  useEffect(() => {
    document.title = "Rachel Portfolio";
  }, []);
  return (
    <>
    {/* <CustomCursor /> */}
     <Navbarmenu />
      <main className="p-6">
        <MainPro />
        <HookMaluaText />
        <Mainunalcv />
      </main>
    </>
  )
}

export default App

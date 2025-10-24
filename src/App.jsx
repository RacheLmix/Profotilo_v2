import { use, useState } from 'react'
import { useEffect } from "react";
import Navbarmenu from './complement/Navbarmenu'
import MainPro from './complement/MainPro.jsx'
function App() {
  useEffect(() => {
    document.title = "Rachel Portfolio";
  }, []);
  return (
    <>
     <Navbarmenu />
      <main className="p-6">
        <MainPro />
      </main>
    </>
  )
}

export default App

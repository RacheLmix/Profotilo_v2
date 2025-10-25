import { use, useState } from 'react'
import { useEffect } from "react";
import Navbarmenu from './complement/Navbarmenu'
import MainPro from './complement/MainPro.jsx'
import HookMaluaText from './complement/HookMaluaText.jsx';
import CustomCursor from './complement/CustomCursor.jsx';
import Mainunalcv from './complement/Mainunalcv.jsx';
import HookProjects from './complement/HookProjects.jsx';
import MainProjects from './complement/MainProjects.jsx';
import ManualEnginer from './complement/ManualEnginer.jsx';
function App() {
  useEffect(() => {
    document.title = "Rachel Portfolio";
  }, []);
  return (
    <>
      <Navbarmenu />
      <main className="p-6 m-0 min-h-screen">
        <MainPro />
        <section id='profile'>
          <HookMaluaText />
          <Mainunalcv />
        </section>
        <section id='projects'>
          <HookProjects />
          <MainProjects />
        </section>
      </main>
    </>
  )
}

export default App

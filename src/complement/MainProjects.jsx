import React, { useState } from 'react'
import CardProjects from '../hook/CardProjects'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import api from '../Api/api'

const MainProjects = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  const [projects, Setprojects] = useState([])
  const fetchProjects = async() => {
    try {
      const response = await api.get("/api/projects")
      Setprojects(response.data)
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  React.useEffect(() => {
    fetchProjects();
    if (inView) controls.start('visible')
  }, [controls, inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div ref={ref} className="projects-wrapper flex flex-wrap justify-center gap-5 p-0">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: i * 0.1 }}
        >
          <CardProjects {...project} />
        </motion.div>
      ))}
    </div>
  )
}

export default MainProjects

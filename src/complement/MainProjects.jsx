import React from 'react'
import CardProjects from '../hook/CardProjects'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MainProjects = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  React.useEffect(() => {
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

  const projects = [
    {
      image: "https://i.pinimg.com/736x/37/88/fc/3788fc86e7c8110ef00cfab3bde27203.jpg",
      title: "Project Daily UI",
      description: "website design for daily UI challenges.I designed over 100+ UI screens for various applications, focusing on user experience and visual aesthetics.",
    },
    {
      image: "https://i.pinimg.com/736x/b2/8e/c9/b28ec9727db11430bdc9cee19e7b802b.jpg",
      title: "Project AI Vtuber Komoto",
      description: "An AI-powered virtual YouTuber (VTuber) that uses advanced machine learning algorithms to create engaging and interactive content for viewers.",
    },
    {
      image: "https://i.pinimg.com/474x/55/63/d0/5563d02e6085d6a8aac717424baba1db.jpg",
      title: "Project Todo List App",
      description: "A sleek and intuitive to-do list application designed to help users organize their tasks efficiently with a user-friendly interface.",
    },
    {
      image: "https://i.pinimg.com/736x/33/72/48/337248c0d1d11339966b77472070a3bb.jpg",
      title: "Project DragonBall Online Game",
      description: "An immersive online multiplayer game based on the DragonBall universe, featuring real-time combat, character customization, and epic quests.",
    },
    {
      image: "https://i.pinimg.com/736x/99/41/7d/99417d04b60bf2c238dcd4a88207f540.jpg",
      title: "Project Fumetsu Chat",
      description: "A revolutionary chat application that leverages AI to provide intelligent responses, seamless user experience, and enhanced communication features and security.",
    },
    {
      image: "https://i.pinimg.com/736x/37/88/fc/3788fc86e7c8110ef00cfab3bde27203.jpg",
      title: "Comming Soon Projects",
      description: "Well coming soon Projects in the future 2026 (the new projects 2026)",
    },
    {
      image: "https://i.pinimg.com/736x/37/88/fc/3788fc86e7c8110ef00cfab3bde27203.jpg",
      title: "Comming Soon Projects",
      description: "Well coming soon Projects in the future 2026 (the new projects 2026)",
    },
    {
      image: "https://i.pinimg.com/736x/37/88/fc/3788fc86e7c8110ef00cfab3bde27203.jpg",
      title: "Comming Soon Projects",
      description: "Well coming soon Projects in the future 2026 (the new projects 2026)",
    },
  ]

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-5 p-0">
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

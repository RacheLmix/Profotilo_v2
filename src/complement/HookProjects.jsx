import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TextPressure from "./TextPressure";

const HookProjects = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    React.useEffect(() => {
        if (inView) controls.start("visible")
    }, [controls, inView])

    const fadeUp = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    return (
        <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="mt-20"
            style={{ position: 'relative', height: '300px' }}
        >
            <TextPressure
                text="WELL COME TO MY PROJECTS"
                flex={true}
                alpha={false}
                stroke={true}
                width={true}
                weight={true}
                italic={true}
                textColor="black"
                strokeColor="#CC99FF"
                minFontSize={36}
            />
        </motion.div>
    )
}

export default HookProjects

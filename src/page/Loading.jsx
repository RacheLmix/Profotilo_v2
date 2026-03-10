import React from 'react'
import { motion } from 'framer-motion'
const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className='w-screen h-screen flex items-center justify-center bg-black'>
            <motion.video
                src="./Videos/loading.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-[640px] rounded"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{
                    scale: [0.95, 1, 0.98],
                    opacity: 1
                }}
                transition={{
                    duration: 1.4,
                    ease: 'easeInOut',
                    repeat: Infinity
                }}
            />
        </motion.div>
    )
}

export default Loading
import React from 'react'
import TargetCursor from '../hook/TargetCursor'
import { motion } from 'framer-motion'

const Mainunalcv = () => {
    return (
        <div className="gap-10 flex flex-col md:flex-row items-center justify-center">

            {/* Ảnh bên trái */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -80, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <img
                    src="/img/min.jpg"
                    alt="Unalcv"
                    className="rounded-xl w-80 h-80 object-cover cursor-target 
             hover:scale-105 hover:skew-x-5 hover:skew-y-6  
             duration-300 ease-in-out 
             shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                />
            </motion.div>

            {/* Nội dung bên phải */}
            <motion.div
                className="w-full md:w-1/2 space-y-4 text-center md:text-left"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h1
                    className="text-4xl font-bold"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Profile Rachel
                </motion.h1>

                <motion.p
                    className="text-gray-700 w-[720px] cursor-target"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Hi, my name is <span className="font-semibold">Rachel</span> (
                    Bồ Tùng Dương ) is a Web Development student at FPT Polytechnic, specializing in Backend Development,
                    with a high GPA of 3.65/4.0. His goal is to become a skilled Backend Developer, optimizing effective and secure web systems.
                    He is proficient in JavaScript, PHP, Python, and Laravel. He has practical experience as a Development Member in a Laravel-based Graduation Project
                    (food website) and led a HomeStay booking website project. He is also an active member of the Discord developer community
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <TargetCursor
                        spinDuration={2}
                        hideDefaultCursor={true}
                    />
                    {["PHP", "Laravel", "VueJS", "ReactsJS", "Python", "Mysql"].map((tech, i) => (
                        <motion.button
                            key={i}
                            className="cursor-target px-6 py-2 border bg-black border-gray-400 rounded-3xl text-sm font-medium text-white hover:text-black hover:border-black hover:bg-white hover:rounded-xl transition-all duration-300 ease-in-out mr-2 mt-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tech}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        className='cursor-target'
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/3cq7E7CQEfFipQcABWvK2X?utm_source=generator"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Mainunalcv

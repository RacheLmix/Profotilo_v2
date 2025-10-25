import React, { useEffect } from "react";
import { FaTiktok, FaFacebookF, FaInstagram, FaWeixin, FaXTwitter } from "react-icons/fa6";
import { motion, useMotionValue, useTransform } from "framer-motion";

const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
};

const MainPro = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full text-white overflow-hidden">
            {/* Vầng sáng nền */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[90px] h-[90px] bg-purple-300/20 blur-[650px] rounded-full"></div>
            </div>

            {/* Cột trái */}
            <motion.div
                className="z-10 flex flex-col items-center md:items-end text-center md:text-right px-8 md:px-12 ml-[90px]"
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    variants={textVariant}
                    custom={0.1}
                    className="text-2xl md:text-3xl text-purple-400 mb-3 font-medium tracking-wider"
                >
                    Hello, I’m
                </motion.h2>
                <motion.h1
                    variants={textVariant}
                    custom={0.3}
                    className="text-7xl font-extrabold text-black leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                    Tùng Dương
                </motion.h1>
            </motion.div>

            {/* Ảnh nhân vật */}
            <motion.div
                className="z-10 mx-10 my-10 md:my-0"
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                whileHover={{
                    rotateY: 8,
                    rotateX: 3,
                    scale: 1.03,
                    transition: { duration: 0.4 },
                }}
            >
                <motion.img
                    src="/img/chacter1.png"
                    alt="character"
                    className="w-[380px] md:w-[800px] object-contain drop-shadow-[0_0_70px_rgba(168,85,247,0.8)]"
                />
            </motion.div>

            {/* Cột phải */}
            <motion.div
                className="z-10 flex flex-col items-center md:items-start text-center md:text-left px-8 md:px-12"
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    variants={textVariant}
                    custom={0.5}
                    className="text-2xl md:text-3xl text-purple-400 mb-3 font-medium tracking-wider mt-[-50px]"
                >
                    Creative
                </motion.h2>
                <motion.h1
                    variants={textVariant}
                    custom={0.7}
                    className="text-5xl md:text-7xl font-extrabold text-black leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                    Developer
                </motion.h1>
                <motion.div
                    variants={textVariant}
                    custom={0.9}
                    className="relative inline-block mt-[-60px] z-10"
                >
                    <h1 className="text-5xl md:text-7xl z-[100] text-purple-500 font-extrabold leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] px-4 py-2">
                        &Designer
                    </h1>
                </motion.div>
            </motion.div>

            {/* Icon mạng xã hội */}
            <motion.div
                className="absolute bottom-8 w-full flex justify-center gap-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                {[
                    { icon: <FaTiktok />, link: "https://www.tiktok.com" },
                    { icon: <FaXTwitter />, link: "https://x.com" },
                    { icon: <FaFacebookF />, link: "https://facebook.com" },
                    { icon: <FaInstagram />, link: "https://instagram.com" },
                    { icon: <FaWeixin />, link: "https://wechat.com" },
                ].map((item, i) => (
                    <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1a002e] border border-purple-500/50 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300 text-2xl"
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default MainPro;

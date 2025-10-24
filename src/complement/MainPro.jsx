import React from "react";
import { FaTiktok, FaFacebookF, FaInstagram, FaWeixin, FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
const MainPro = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full text-white overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[90px] h-[90px] bg-purple-300/20 blur-[650px] rounded-full"></div>
            </div>

            <div className="z-10 flex flex-col items-center md:items-end text-center md:text-right px-8 md:px-12 ml-[90px]">
                <h2 className="text-2xl md:text-3xl text-purple-400 mb-3 font-medium tracking-wider" data-aos="fade-up">
                    Hello, I’m
                </h2>
                <h1 className="text-7xl font-extrabold text-black leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Tùng
                    Dương
                </h1>
            </div>

            {/* Ảnh nhân vật */}
            <div className="z-10 mx-10 my-10 md:my-0">
                <img
                    src="/img/chacter1.png"
                    alt="character"
                    className="w-[380px] md:w-[800px] object-contain drop-shadow-[0_0_70px_rgba(168,85,247,0.8)]"
                />
            </div>

            {/* Cột bên phải */}
            <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left px-8 md:px-12">
                <h2 className="text-2xl md:text-3xl text-purple-400 mb-3 font-medium tracking-wider mt-[-50px]">
                    Creative
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Developer
                </h1>
                <div className="relative inline-block mt-[-60px] z-10">
                    <div className="absolute inset-0 rounded-lg blur-[2px] -z-10 px-4 py-2"></div>
                    <h1 className="text-5xl md:text-7xl z-[100] text-purple-500 font-extrabold leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] px-4 py-2">
                        &Designer
                    </h1>
                </div>
            </div>

            {/* 🌐 Mạng xã hội */}
            <div className="absolute bottom-8 w-full flex justify-center gap-6 z-20">
                {[
                    { icon: <FaTiktok />, link: "https://www.tiktok.com" },
                    { icon: <FaXTwitter />, link: "https://x.com" },
                    { icon: <FaFacebookF />, link: "https://facebook.com" },
                    { icon: <FaInstagram />, link: "https://instagram.com" },
                    { icon: <FaWeixin />, link: "https://wechat.com" },
                ].map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1a002e] border border-purple-500/50 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300 text-2xl"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default MainPro;

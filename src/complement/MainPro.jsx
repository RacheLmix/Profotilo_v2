import React from "react";

const MainPro = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full text-white overflow-hidden">

            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[90px] h-[90px] bg-purple-300/20 blur-[650px] rounded-full"></div>
            </div>

            <div className="z-10 flex flex-col items-center md:items-end text-center md:text-right px-8 md:px-12">
                <h2 className="text-2xl md:text-3xl text-purple-400 mb-3 font-medium tracking-wider">
                    Hello, I’m
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Tùng Dương
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

            {/* Bên phải */}
            <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left px-8 md:px-12">
                <h2 className="text-2xl md:text-3xl text-purple-400 mb-3 font-medium tracking-wider mt-[-50px]">
                    Creative
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Developer
                </h1>
                <div className="relative inline-block mt-[-60px] z-10">
                    <div className="absolute inset-0 rounded-lg blur-[2px] -z-10 px-4 py-2"></div>
                    <h1 className="text-5xl md:text-7xl z-[100] text-purple-500 font-extrabold leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] px-4 py-2">
                        &Designer
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default MainPro;

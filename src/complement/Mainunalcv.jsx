import React from 'react'
import TargetCursor from '../hook/TargetCursor'
const Mainunalcv = () => {
    return (
        <div className="gap-10 flex flex-col md:flex-row items-center justify-center">

            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/img/min.jpg"
                    alt="Unalcv"
                    className="rounded-xl w-80 h-80 object-cover cursor-target 
             hover:scale-105 hover:skew-x-5 hover:skew-y-6  
             duration-300 ease-in-out 
             shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                />

            </div>

            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h1 className="text-4xl font-bold">Profile Rachel</h1>

                <p className="text-gray-700 max-w-md cursor-target">
                    Hi, my name is <span className="font-semibold">Luminous</span>.
                    I use most AI engines and build applications that merge creativity with intelligence.
                </p>

                <div>
                    <TargetCursor
                        spinDuration={2}
                        hideDefaultCursor={true}
                    />
                    <button className="cursor-target px-6 py-2 border bg-black border-gray-400 rounded-3xl text-sm font-medium text-white hover:text-black hover:border-black hover:bg-white hover:rounded-xl transition-all duration-300 ease-in-out">PHP</button>
                    <button className="cursor-target px-6 py-2 border bg-black border-gray-400 rounded-3xl text-sm font-medium text-white hover:text-black hover:border-black hover:bg-white hover:rounded-xl transition-all duration-300 ease-in-out">Laravel</button>
                    <button className="cursor-target px-6 py-2 border bg-black border-gray-400 rounded-3xl text-sm font-medium text-white hover:text-black hover:border-black hover:bg-white hover:rounded-xl transition-all duration-300 ease-in-out">VueJS</button>
                    <button className="cursor-target px-6 py-2 border bg-black border-gray-400 rounded-3xl text-sm font-medium text-white hover:text-black hover:border-black hover:bg-white hover:rounded-xl transition-all duration-300 ease-in-out">ReactsJS</button>
                    <button className="cursor-target px-6 py-2 border bg-black border-gray-400 rounded-3xl text-sm font-medium text-white hover:text-black hover:border-black hover:bg-white hover:rounded-xl transition-all duration-300 ease-in-out">Python</button>
                    <button className="cursor-target px-6 py-2 border bg-black border-gray-400 rounded-3xl text-sm font-medium text-white hover:text-black hover:border-black hover:bg-white hover:rounded-xl transition-all duration-300 ease-in-out">Mysql</button>
                </div>
                <div className="mt-6">
                    <iframe className='cursor-target'
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/3cq7E7CQEfFipQcABWvK2X?utm_source=generator"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default Mainunalcv

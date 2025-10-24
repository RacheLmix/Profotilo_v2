import React, { use } from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    useEffect(() => {
        document.title = "404 Not Found";
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="mb-6">
                <img
                    className="rounded-full w-[140px] h-[140px] object-cover hover:scale-125 duration-300 ease-in-out shadow-lg"
                    src="https://i.pinimg.com/736x/2a/9f/5c/2a9f5ce384c3a05d34916a3a413e12ef.jpg"
                    alt="Not Found"
                />
            </div>


            <div>
                <p className="text-lg leading-relaxed">
                    Hi there! It seems you've ventured into uncharted territory. <br />
                    The page you're looking for doesn't exist.
                </p>

                <p className="mt-4 text-gray-300">
                    But don't worry, you can always head back to the{" "}
                    <Link
                        to="/"
                        className="text-blue-400 hover:text-blue-500 underline transition-colors"
                    >
                        home page
                    </Link>{" "}
                    and start fresh!
                </p>
            </div>
        </div>
    )
}

export default NotFound
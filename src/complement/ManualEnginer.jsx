import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const ManualEnginer = () => {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-20 py-16 gap-10"
            initial={{ opacity: 0, rotateX: -10, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Ảnh bên trái */}
            <motion.div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl"
                initial={{ rotateY: -15, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <img
                    src="https://via.placeholder.com/300"
                    alt="Engineer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </motion.div>

            {/* Phần thông tin */}
            <motion.div
                className="flex flex-col items-start text-left space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                    Contact Me
                </h2>
                <p className="text-gray-600 text-lg">
                    Email:{" "}
                    <span className="text-gray-800 font-medium">
                        youremail@example.com
                    </span>
                </p>

                <div className="flex items-center gap-5 mt-4">
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
                        whileHover={{ rotateY: 10, scale: 1.1 }}
                    >
                        <Github className="w-5 h-5 text-gray-700" />
                    </motion.a>

                    <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
                        whileHover={{ rotateY: 10, scale: 1.1 }}
                    >
                        <Linkedin className="w-5 h-5 text-gray-700" />
                    </motion.a>

                    <motion.a
                        href="mailto:youremail@example.com"
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
                        whileHover={{ rotateY: 10, scale: 1.1 }}
                    >
                        <Mail className="w-5 h-5 text-gray-700" />
                    </motion.a>

                    <motion.a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
                        whileHover={{ rotateY: 10, scale: 1.1 }}
                    >
                        <Facebook className="w-5 h-5 text-gray-700" />
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ManualEnginer;

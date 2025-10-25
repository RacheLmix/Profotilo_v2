import TextPressure from "./TextPressure";
import React from 'react'
import { motion } from "framer-motion";

const HookMaluaText = () => {
    return (
        <div className="mt-20" style={{ position: 'relative', height: '300px' }}>
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // chỉ chạy 1 lần khi cuộn tới ~30% vùng hiển thị
            >
                <TextPressure
                    text="WELL COME TO PROFILE RACHEL"
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
        </div>
    )
}

export default HookMaluaText

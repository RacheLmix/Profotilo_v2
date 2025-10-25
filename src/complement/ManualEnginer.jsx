import React from 'react';
import { motion } from 'framer-motion';
import Magnet from '../hook/Magnet';
import { Github, Linkedin, Mail, Facebook, Twitter } from 'lucide-react';


const ManualEnginer = () => {
    return (
        <div className="flex">
            <Magnet padding={20} disabled={false} magnetStrength={10}>
                <img className="custom-shadow" src="/img/iqq.png" alt="Engineer" />
            </Magnet>
        </div>
    );
};

export default ManualEnginer;

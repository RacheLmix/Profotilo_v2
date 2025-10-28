import React, { useState } from 'react'
import axios from 'axios'
import { motion, time } from "framer-motion";
const API_BASE = "https://snaptikbackend.onrender.com";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { param } from 'framer-motion/client';
import Navbarmenu from '../complement/Navbarmenu';
const Snaptik = () => {
    useEffect(() => {
        document.title = "TikTok Video RachelVibeCoding";
    }, []);
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [videoData, setVideoData] = useState(null);
    const handleFetch = async () => {
        if (!url.trim()) {
            setError("Please enter a valid TikTok URL.");
            return;
        }
        setError('');
        setLoading(true);
        setVideoData(null);
        try {
            const res = await axios.get(`${API_BASE}/download`, {
                params: { url },
                timeout: 30000,
            });
            const payload = res.data?.data?.data ? res.data.data.data : res.data?.data;
            if (!payload) throw new Error('No data returned from API');
            const normalized = {
                title: payload.title || '',
                author: payload.author || (payload.author && payload.author.unique_id) || null,
                cover: payload.cover || payload.thumbnail || null,
                download_url: payload.download_url || payload.play_url || payload.play,
                music_url: payload.music_url || payload.music || null,
            };
            setVideoData(normalized);
        }
        catch (err) {
            console.error(err);
            const msg = err.response?.data?.detail || err.response?.data?.message || err.message || 'Lỗi khi gọi API';
            setError(String(msg));
        } finally {
            setLoading(false);
        }
    }
    const handleDownload = (type) => {
        if (!videoData) return;

        let downloadLink = '';
        if (type === 'video' && videoData.download_url) {
            downloadLink = `${API_BASE}/download/file?url=${encodeURIComponent(url)}`;
        } else if (type === 'music' && videoData.music_url) {
            downloadLink = videoData.music_url;
        } else {
            setError('Không tìm thấy link tải.');
            return;
        }

        window.open(downloadLink, '_blank');
    };



    return (
        <>
            <Navbarmenu />
            <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="max-w-lg w-full bg-white border border-neutral-200 rounded-2xl p-6 shadow-md"
                >
                    <h1 className="text-lg font-semibold text-neutral-900 text-center mb-4">TikTok Downloader</h1>

                    <div className="flex gap-2">
                        <input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleFetch(); } }}
                            className="flex-1 p-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                            placeholder="Dán link TikTok vào đây (ví dụ: https://www.tiktok.com/@user/video/...)"
                        />
                        <button
                            onClick={handleFetch}
                            disabled={loading}
                            className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm font-medium disabled:opacity-60"
                        >
                            {loading ? 'Đang xử lý...' : 'DownLoad'}
                        </button>
                    </div>

                    {error && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-sm text-red-500">
                            {error}
                        </motion.p>
                    )}

                    {videoData ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 grid grid-cols-1 gap-3">
                            <div className="flex items-center gap-4">
                                {videoData.cover ? (
                                    <img src={videoData.cover} alt="cover" className="w-28 h-40 object-cover rounded-lg border" />
                                ) : (
                                    <div className="w-28 h-40 bg-neutral-100 rounded-lg flex items-center justify-center text-xs text-neutral-400">No cover</div>
                                )}
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-neutral-900 line-clamp-2">{videoData.title || 'Không có tiêu đề'}</div>
                                    <div className="text-xs text-neutral-500 mt-1">@{(videoData.author && (videoData.author.unique_id || videoData.author)) || 'unknown'}</div>
                                    <div className="mt-3 flex gap-2">
                                        <button
                                            onClick={handleDownload}
                                            className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
                                        >
                                            Tải Video Không Logo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : null}
                </motion.div>
            </div>
        </>
    )
}

export default Snaptik
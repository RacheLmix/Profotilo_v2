import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbarmenu from '../complement/Navbarmenu';

const API_BASE = "https://snaptikbackend.onrender.com";

const Snaptik = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    document.title = "TikTok Video Downloader";
  }, []);

  const handleFetch = async () => {
    if (!url.trim()) {
      setError("Please enter a TikTok URL.");
      return;
    }
    setError('');
    setLoading(true);
    setVideoData(null);

    try {
      const res = await axios.get(`${API_BASE}/download`, {
        params: { url },
        timeout: 30000
      });
      setVideoData(res.data.data);
    } catch (err) {
      const msg = err.response?.data?.detail || err.message || "Error fetching video";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (type) => {
    if (!videoData) return;

    let link = "";
    if (type === 'video') link = `${API_BASE}/download/file?url=${encodeURIComponent(url)}`;
    else if (type === 'music' && videoData.music_url) link = videoData.music_url;
    else {
      setError("Không tìm thấy link tải.");
      return;
    }

    window.open(link, "_blank");
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
          <h1 className="text-lg font-semibold text-center mb-4">TikTok Downloader</h1>

          <div className="flex gap-2">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleFetch()}
              className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800"
              placeholder="Paste TikTok link here..."
            />
            <button
              onClick={handleFetch}
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white disabled:opacity-60"
            >
              {loading ? 'Processing...' : 'Download'}
            </button>
          </div>

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          {videoData && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 grid gap-3">
              <div className="flex items-center gap-4">
                {videoData.cover ? (
                  <img src={videoData.cover} alt="cover" className="w-28 h-40 object-cover rounded-lg border" />
                ) : (
                  <div className="w-28 h-40 bg-neutral-100 flex items-center justify-center text-xs text-neutral-400">
                    No cover
                  </div>
                )}
                <div className="flex-1">
                  <div className="text-sm font-semibold line-clamp-2">{videoData.title}</div>
                  <div className="text-xs text-neutral-500 mt-1">@{videoData.author}</div>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleDownload('video')}
                      className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                    >
                      Tải Video
                    </button>
                    {videoData.music_url && (
                      <button
                        onClick={() => handleDownload('music')}
                        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Tải Nhạc
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Snaptik;

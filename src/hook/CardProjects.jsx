import React from 'react';
import '../styles/CardProjects.css';
import TargetCursor from './TargetCursor';
import { useNavigate } from 'react-router-dom';

const CardProjects = ({ id, title, thumbnail, description }) => {
  const navigate = useNavigate();

  const handleDetailClick = (e) => {
    e.stopPropagation(); 
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <div className="prj-wrapper cursor-target">
        <div className="prj-card" onClick={handleDetailClick}>
          <div className="prj-img-box">
            <img 
              src={thumbnail || "https://i.pinimg.com/736x/d8/4c/fa/d84cfade6f6eef7856fc4899a9ab6c34.jpg"} 
              alt={title || "Project Thumbnail"} 
              className="prj-img" 
            />
          </div>
          <div className="prj-content">
            <h3 className="prj-title">{title}</h3>
            <p className="prj-desc">
              {description}
            </p>
            <button className="prj-btn" onClick={handleDetailClick}>
              Detail Project 
              <span className="prj-btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProjects;
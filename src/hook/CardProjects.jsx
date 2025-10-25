import React from 'react'
import '../styles/CardProjects.css'
import TargetCursor from './TargetCursor'
const CardProjects = ({image, title, description}) => {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <div className="card-container cursor-target">
        <div className="card">
          <img
            src={image}
            alt="Project"
          />
          <div className="card-content">
            <h3>{title}</h3>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProjects

import React from 'react'
import '../styles/CardProjects.css'
import TargetCursor from './TargetCursor'
import { useNavigate } from 'react-router'
const CardProjects = ({ id, slug, image, title, description }) => {
  const navigate = useNavigate()
  const handchangedetails = () => {
    navigate(`/detail/${id}`)
  }
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
            <button onClick={handchangedetails}>Detail Project</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProjects

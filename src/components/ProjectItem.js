import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      
      {technologies.map((technology, index)=>{
        return <span key={index}>{technology}</span>
      })};

      </div>
    </div>
  );
}

export default ProjectItem;